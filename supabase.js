// supabase.js
// Supabase client connection structure for ZAHRA Studio.
// Replace SUPABASE_URL and SUPABASE_ANON_KEY with your project values.

const SUPABASE_URL = 'https://YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const SupabaseService = (function() {
    const hasSupabase = typeof supabase !== 'undefined' && typeof supabase.createClient === 'function';
    const isConfigured = hasSupabase && SUPABASE_URL.indexOf('YOUR_') === -1 && SUPABASE_ANON_KEY.indexOf('YOUR_') === -1;
    let client = null;

    if (hasSupabase) {
        client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }

    function logFallback(action) {
        if (!isConfigured) {
            console.warn(`[SupabaseService] Supabase not configured. ${action} will use local fallback or no-op.`);
        }
    }

    async function createOrder(orderData) {
        if (!isConfigured) {
            logFallback('createOrder');
            return { data: null, error: new Error('Supabase not configured') };
        }
        return client.from('orders').insert(orderData).select();
    }

    async function upsertOrder(orderData) {
        if (!isConfigured) {
            logFallback('upsertOrder');
            return { data: null, error: new Error('Supabase not configured') };
        }
        return client.from('orders').upsert(orderData, { onConflict: 'order_number' }).select();
    }

    async function getOrders() {
        if (!isConfigured) {
            logFallback('getOrders');
            return { data: [], error: new Error('Supabase not configured') };
        }
        return client.from('orders').select('*').order('placed_at', { ascending: false });
    }

    async function updateOrderStatus(orderId, status) {
        if (!isConfigured) {
            logFallback('updateOrderStatus');
            return { data: null, error: new Error('Supabase not configured') };
        }
        return client.from('orders').update({ status, updated_at: new Date().toISOString() }).eq('id', orderId).select();
    }

    async function saveCart(cartData) {
        if (!isConfigured) {
            logFallback('saveCart');
            return { data: null, error: new Error('Supabase not configured') };
        }
        const payload = {
            session_id: cartData.session_id || null,
            user_id: cartData.user_id || null,
            items: cartData.items || [],
            total_amount: cartData.total_amount || 0,
            updated_at: new Date().toISOString()
        };
        return client.from('carts').upsert(payload, { onConflict: 'session_id' }).select();
    }

    async function getInventory() {
        if (!isConfigured) {
            logFallback('getInventory');
            return { data: [], error: new Error('Supabase not configured') };
        }
        return client.from('inventory').select('*').order('product_id', { ascending: true });
    }

    async function loginVendor(email, password) {
        if (!isConfigured) {
            logFallback('loginVendor');
            return { data: null, error: new Error('Supabase not configured') };
        }
        return client.auth.signInWithPassword({ email, password });
    }

    async function logoutVendor() {
        if (!isConfigured) {
            logFallback('logoutVendor');
            return { data: null, error: new Error('Supabase not configured') };
        }
        return client.auth.signOut();
    }

    async function resetPassword(email) {
        if (!isConfigured) {
            logFallback('resetPassword');
            return { data: null, error: new Error('Supabase not configured') };
        }
        return client.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin
        });
    }

    return {
        isConfigured,
        client,
        createOrder,
        upsertOrder,
        getOrders,
        updateOrderStatus,
        saveCart,
        getInventory,
        loginVendor,
        logoutVendor,
        resetPassword,

        // SQL schema suggestions for your Supabase PostgreSQL backend.
        sqlSchema: `
-- products table
CREATE TABLE products (
  id serial PRIMARY KEY,
  name text NOT NULL,
  category text,
  collection text,
  description text,
  price numeric NOT NULL,
  original_price numeric,
  availability text,
  badge text,
  trending boolean DEFAULT false,
  loved integer DEFAULT 0,
  date date,
  image text,
  colors text[],
  sizes text[],
  variant_images jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- customers table
CREATE TABLE customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_uid text UNIQUE,
  name text,
  email text UNIQUE,
  phone text,
  address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  customer_id uuid REFERENCES customers(id),
  status text DEFAULT 'Order Placed',
  subtotal numeric,
  shipping_amount numeric,
  total_amount numeric,
  item_count integer,
  items jsonb,
  notes text,
  placed_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- order_items table
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  product_id integer REFERENCES products(id),
  name text,
  size text,
  color text,
  quantity integer,
  unit_price numeric,
  total_price numeric,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- inventory table
CREATE TABLE inventory (
  product_id integer REFERENCES products(id),
  stock_count integer DEFAULT 0,
  low_stock_threshold integer DEFAULT 5,
  location text,
  updated_at timestamptz DEFAULT now(),
  PRIMARY KEY (product_id)
);

-- admins table
CREATE TABLE admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_uid text UNIQUE,
  email text UNIQUE,
  role text DEFAULT 'vendor',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
`};
})();

window.SupabaseService = SupabaseService;
