$dir = "c:\Users\Issa\OneDrive\Documents\Zahra Vs\assets\products"
$files = Get-ChildItem -Path $dir -File | Sort-Object Name
$existing = @{}
foreach ($file in $files) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $ext = $file.Extension.ToLower()
    $safe = $name.ToLower()
    $safe = [regex]::Replace($safe, "[^a-z0-9\-_.]+", "-")
    $safe = [regex]::Replace($safe, "-{2,}", "-")
    $safe = $safe.Trim('-','.')
    if ([string]::IsNullOrWhiteSpace($safe)) { $safe = "asset" }
    $targetName = "$safe$ext"
    $counter = 1
    while ($existing.ContainsKey($targetName) -or (Test-Path (Join-Path $dir $targetName) -and $targetName -ne $file.Name)) {
        $targetName = "$safe-$counter$ext"
        $counter++
    }
    $existing[$targetName] = $true
    if ($targetName -ne $file.Name) {
        Rename-Item -LiteralPath $file.FullName -NewName $targetName
    }
}
Write-Output "Renamed asset filenames to normalized safe names."