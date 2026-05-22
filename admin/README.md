# ZAHRA Admin Panel Documentation

## Overview

This admin panel provides a complete management interface for the ZAHRA Studio ecommerce platform. It's built as an isolated system within the `/admin` folder, fully integrated with Supabase backend architecture, and maintains the luxury aesthetic of the main storefront.

## File Structure

```
/admin/
├── login.html          # Admin authentication entry point
├── dashboard.html      # Main dashboard with statistics
├── orders.html         # Order management and tracking
├── inventory.html      # Product inventory management
├── admin.js            # Core modular functions library
├── admin.css           # Responsive admin styling
└── README.md           # This file
```

## Features

### 1. LOGIN SYSTEM (`login.html`)

**Features:**
- Email + password authentication
- Forgot password functionality
- Session persistence
- Clean, luxury-styled login page

**Integration Points:**
- `handleEmailLogin()` - Connects to Supabase Auth
- `handlePasswordReset()` - Connects to Supabase password reset
- `checkAdminSession()` - Verifies active session

**Usage Flow:**
1. User navigates to `/admin/login.html`
2. Enters email and password
3. System validates credentials via Supabase Auth
4. On success: redirects to dashboard.html
5. On failure: shows error message

**Current State:**
- ✅ UI fully built with forms and validation
- ⚠️ Supabase integration marked with TODO comments
- 🔄 Demo fallback using localStorage for development

---

### 2. DASHBOARD (`dashboard.html`)

**Features:**
- 6 statistics cards (Total Orders, Processing, Shipped, Delivered, Revenue, Inventory)
- Recent orders preview table
- Low stock items alert
- Real-time status indicators
- Color-coded metrics

**Statistics Displayed:**
- **Total Orders**: Count of all orders
- **Processing**: Orders being prepared
- **Shipped**: Orders in transit
- **Delivered**: Completed orders
- **Total Revenue**: Sum of order totals
- **Inventory Items**: Total product count

**Integration Points:**
- `loadDashboardStats()` - Aggregates order and inventory data
- `loadRecentOrders()` - Fetches last 5 orders
- `loadLowStockItems()` - Identifies items below threshold

**Current State:**
- ✅ UI fully designed with responsive grid
- ⚠️ Supabase queries marked with TODO
- 🔄 Demo data provides realistic preview

---

### 3. ORDERS MANAGEMENT (`orders.html`)

**Features:**
- Complete order table with all details
- Real-time status updates (Processing → Shipped → In Transit → Delivered)
- Order search functionality
- Customer information display
- Order detail modal popup
- Status update modal with notes

**Table Columns:**
- Order ID
- Customer Name
- Item Count
- Total Amount
- Current Status
- Order Date
- Action Buttons (View Details, Update Status)

**Status Management:**
- `updateOrderStatus()` - Changes order status and records timestamp
- `filterByStatus()` - Filters orders by current status
- `search()` - Searches by Order ID or Customer

**Current State:**
- ✅ Full CRUD UI for order viewing and updates
- ⚠️ Supabase update calls marked with comments
- 🔄 Demo data shows realistic order flow

---

### 4. INVENTORY MANAGEMENT (`inventory.html`)

**Features:**
- Product management table with images
- Add Product modal
- Edit Product modal
- Delete Product confirmation
- Stock level indicators (red for low stock)
- Category filtering
- Product image previews

**Table Columns:**
- Product Image
- Product Name
- Category
- SKU
- Stock Quantity
- Price
- Action Buttons

**CRUD Operations:**
- **Create**: Add new products with `openAddProductModal()` → `submitAddProduct()`
- **Read**: Display all products with stock levels
- **Update**: Edit product details via `openEditProductModal()` → `submitEditProduct()`
- **Delete**: Remove products with confirmation via `openDeleteModal()` → `confirmDelete()`

**Product Fields:**
- Name (required)
- Category (required) - Women, Men, Accessories, Bags, Shoes
- SKU (required) - Unique identifier
- Price (required) - In Nigerian Naira
- Stock Quantity (required)
- Description (optional)
- Image URL (optional)

**Current State:**
- ✅ Complete CRUD interface with modals
- ⚠️ Database operations marked for Supabase integration
- 🔄 Demo inventory data provided

---

## Core Module: `admin.js`

This file contains **modular, reusable functions** organized into namespaces:

### AdminAuth
```javascript
AdminAuth.checkSession()                  // Verify user authentication
AdminAuth.loginWithEmail(email, password) // Email/password login
AdminAuth.logout()                        // Clear session
AdminAuth.requestPasswordReset(email)     // Send reset email
```

### AdminDashboard
```javascript
AdminDashboard.getStats()           // Fetch all dashboard statistics
AdminDashboard.getRecentOrders()    // Get last N orders
AdminDashboard.getLowStockItems()   // Find items below threshold
```

### AdminOrders
```javascript
AdminOrders.getAllOrders()              // Fetch all orders
AdminOrders.getOrderById(orderId)       // Get specific order
AdminOrders.updateOrderStatus()         // Change order status
AdminOrders.filterByStatus(orders, status)  // Filter orders
AdminOrders.search(orders, searchTerm)  // Search functionality
```

### AdminInventory
```javascript
AdminInventory.getAllProducts()              // Fetch all products
AdminInventory.addProduct(productData)       // Create new product
AdminInventory.updateProduct(id, data)       // Update product
AdminInventory.deleteProduct(id)             // Delete product
AdminInventory.updateStock(id, quantity)     // Update stock level
AdminInventory.filterByCategory()            // Filter by category
AdminInventory.findLowStock()                // Find low stock items
AdminInventory.search()                      // Search products
```

### AdminUtils
```javascript
AdminUtils.formatCurrency(amount)      // Format as Nigerian Naira
AdminUtils.formatDate(date)            // Format dates
AdminUtils.formatStatus(status)        // Format status text
AdminUtils.getStatusClass(status)      // Get CSS class for status
AdminUtils.generateId()                // Generate unique ID
AdminUtils.isValidEmail(email)         // Validate email format
AdminUtils.debounce(func, delay)       // Debounce function calls
```

---

## Styling: `admin.css`

**Design System:**
- **Font**: Playfair Display (headings), Inter (body)
- **Colors**: Luxury palette matching ZAHRA Studio (beige, cream, gold, black)
- **Status Colors**: Green (success), Amber (warning), Red (danger), Blue (info)
- **Responsive**: Mobile-first, adapts to all screen sizes

**Key CSS Classes:**
- `.admin-wrapper` - Main layout grid (sidebar + content)
- `.admin-sidebar` - Navigation menu
- `.stats-grid` - Dashboard statistics cards
- `.status-badge` - Status indicators with colors
- `.modal-overlay` - Modal dialog system
- `.btn-primary`, `.btn-secondary`, `.btn-danger` - Button styles
- `.alert` - Alert/notification system
- `.form-input`, `.select-input` - Form elements

**Responsive Breakpoints:**
- **768px**: Sidebar becomes mobile menu
- **480px**: Single column layouts, stacked buttons

---

## Supabase Integration

### Current Implementation Status

**✅ READY TO CONNECT:**
- All database operations have placeholder functions with TODO comments
- Authentication points are clearly marked
- Error handling is built in
- Demo data provides fallback functionality

**Integration Checklist:**

```javascript
// 1. Setup in supabase.js (already exists)
✅ SupabaseService.loginVendor()
✅ SupabaseService.logoutVendor()
✅ SupabaseService.resetPassword()
✅ SupabaseService.getOrders()
✅ SupabaseService.updateOrderStatus()
✅ SupabaseService.getInventory()

// 2. Replace demo data with actual queries in admin.js:
⚠️ AdminAuth.loginWithEmail() - Line 35
⚠️ AdminDashboard.getStats() - Line 85
⚠️ AdminOrders.getAllOrders() - Line 165
⚠️ AdminInventory.getAllProducts() - Line 285
```

### How to Connect to Supabase

1. **In admin.js**, find all `// SUPABASE INTEGRATION` comments
2. Uncomment the Supabase function calls
3. Comment out the demo data section (// FALLBACK)
4. Ensure SupabaseService from supabase.js is loaded

**Example:**
```javascript
// BEFORE (demo):
const stats = { totalOrders: 24, ... };

// AFTER (production):
const { data: orders } = await SupabaseService.getOrders();
const { data: inventory } = await SupabaseService.getInventory();
// Calculate stats from actual data
```

---

## Authentication Flow

### Login Flow
```
User visits /admin/login.html
    ↓
Enters email + password
    ↓
handleEmailLogin() validates input
    ↓
Calls SupabaseService.loginVendor() [TODO: uncomment]
    ↓
Server validates credentials
    ↓
✅ Login success → localStorage token → redirect to dashboard.html
❌ Login failed → Show error message → Stay on login page
```

### Session Protection
```
User navigates to dashboard.html
    ↓
checkAdminAuthAndInit() runs on page load
    ↓
Calls AdminAuth.checkSession()
    ↓
✅ Session valid → Load dashboard content
❌ No session → Redirect to login.html
```

### Logout Flow
```
User clicks "Logout"
    ↓
handleLogout() executes
    ↓
Calls SupabaseService.logoutVendor() [TODO: uncomment]
    ↓
Clears localStorage
    ↓
Redirects to login.html
```

---

## Data Models

### Order Object
```javascript
{
    id: "ORD-2024-001",
    customer: "Amina Hassan",
    email: "amina@example.com",
    items: [
        { name: "Ankara Wrapper", quantity: 2, price: 15000 },
        { name: "Beads", quantity: 1, price: 5000 }
    ],
    total: 45000,
    status: "delivered" | "shipped" | "in-transit" | "processing",
    date: "2024-01-15",
    shippingAddress: "123 Lagos St, Lagos",
    phone: "08012345678"
}
```

### Product Object
```javascript
{
    id: 1,
    name: "Ankara Print Wrapper",
    category: "women" | "men" | "accessories" | "bags" | "shoes",
    sku: "APW-001",
    price: 15000,
    stock: 23,
    description: "Beautiful ankara print wrapper...",
    image: "https://example.com/image.jpg"
}
```

---

## Security Considerations

✅ **Built-in safeguards:**
- Session validation on every page load
- Logout clears authentication tokens
- Form validation before submission
- Error messages don't expose sensitive data
- All database operations should use authenticated Supabase calls

⚠️ **To implement for production:**
1. Enable Supabase Row Level Security (RLS) policies
2. Restrict admin access to specific user roles
3. Add audit logging for all admin actions
4. Implement rate limiting on authentication attempts
5. Use HTTPS for all admin panel traffic
6. Add email verification for password resets

---

## Development vs. Production

### Development (Current)
- ✅ Demo data provides immediate feedback
- ✅ localStorage fallback for testing
- ✅ No Supabase connection required
- ⚠️ Data not persistent across sessions
- ⚠️ All users see same demo data

### Production (Ready to deploy)
1. Uncomment all Supabase integration code
2. Remove or comment out demo data sections
3. Enable proper error logging
4. Set up RLS policies in Supabase
5. Test all database operations
6. Deploy to production server

---

## Testing Checklist

### Authentication
- [ ] Login page loads correctly
- [ ] Email validation works
- [ ] Forgot password form appears
- [ ] Valid credentials show success message
- [ ] Invalid credentials show error
- [ ] After login, user redirected to dashboard
- [ ] Logout clears session and redirects to login
- [ ] Direct URL access without session redirects to login

### Dashboard
- [ ] All 6 stat cards display
- [ ] Recent orders table shows data
- [ ] Low stock items display correctly
- [ ] Numbers are calculated correctly
- [ ] Page is responsive on mobile

### Orders
- [ ] Orders table displays all orders
- [ ] Search functionality filters results
- [ ] Status badges show correct colors
- [ ] View Details modal shows order information
- [ ] Status update modal works
- [ ] Status change saves correctly
- [ ] Alert messages appear after updates

### Inventory
- [ ] All products display in table
- [ ] Product images load correctly
- [ ] Add Product modal appears when clicking button
- [ ] New product saves to list
- [ ] Edit modal pre-fills with current data
- [ ] Product updates save correctly
- [ ] Delete confirmation appears
- [ ] Delete removes product from list
- [ ] Low stock items show in red

### Styling
- [ ] Colors match ZAHRA brand
- [ ] Fonts are correct (Playfair + Inter)
- [ ] Responsive on mobile (320px, 768px, 1024px)
- [ ] Modals are centered and overlay correctly
- [ ] Buttons hover states work
- [ ] Forms are accessible

---

## Troubleshooting

### Issue: "Login not working"
- ✅ Verify Supabase credentials in supabase.js
- ✅ Check browser console for errors
- ✅ Confirm localStorage fallback works (dev mode)
- ✅ Verify email/password are correct

### Issue: "Orders/Inventory not loading"
- ✅ Check Supabase connection
- ✅ Verify database tables exist
- ✅ Check browser console for errors
- ✅ Confirm demo data displays (fallback works)

### Issue: "Modals not appearing"
- ✅ Check CSS file is loaded
- ✅ Verify JavaScript functions are called
- ✅ Check browser console for errors
- ✅ Ensure modal IDs match in HTML/JS

### Issue: "Sidebar menu not responsive"
- ✅ Check admin-sidebar CSS class
- ✅ Verify media query styles load
- ✅ Test on actual mobile device
- ✅ Check JavaScript toggles menu class

---

## Future Enhancements

**Planned features:**
- [ ] Live order notifications
- [ ] Bulk order status updates
- [ ] Advanced inventory filtering and sorting
- [ ] Product image upload (not URL)
- [ ] Order export to PDF
- [ ] Sales analytics and charts
- [ ] Staff/vendor management
- [ ] Customer relationship management
- [ ] Email notifications for status changes
- [ ] Barcode scanning for inventory

---

## Isolation Assurance

**✅ Admin panel is completely isolated:**
- Separate `/admin` folder
- No imports from main storefront code
- No modifications to `products.js`, `index.html`, or category pages
- Admin CSS doesn't affect storefront styling
- Admin JavaScript doesn't interfere with cart/checkout
- Completely independent authentication system

**Main storefront remains untouched:**
- Product rendering functionality unchanged
- Shopping cart fully functional
- Category navigation works normally
- Checkout process unaffected
- All customer-facing features working

---

## Support & Contact

For questions about the admin panel:
- Check comments in each file (marked with INTEGRATION POINT, TODO, FALLBACK)
- Review Supabase documentation at https://supabase.com/docs
- Test with demo data first before enabling production
- Refer to admin.js module documentation above

---

**Admin Panel Version:** 1.0 | **Last Updated:** 2024-01-20 | **Status:** Ready for Supabase Integration
