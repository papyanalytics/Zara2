Set-Location "c:\Users\Issa\OneDrive\Documents\Zahra Vs"
$bad = @()
$patterns = @('*.html', '*.js', '*.css')
foreach ($pattern in $patterns) {
    foreach ($h in Get-ChildItem -Recurse -Include $pattern -File) {
        $text = Get-Content $h -Raw
        $matches = [regex]::Matches($text, "assets/products/[^\"'\)\s]+")
        foreach ($m in $matches) {
            if (-not (Test-Path $m.Value)) {
                $bad += [pscustomobject]@{ File = $h.FullName; Ref = $m.Value }
            }
        }
    }
}
if ($bad.Count -eq 0) {
    Write-Output 'No broken asset references found.'
} else {
    $bad | Sort-Object File, Ref | Format-Table -AutoSize
}
