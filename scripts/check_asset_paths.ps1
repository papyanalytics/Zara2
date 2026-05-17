Set-Location "c:\Users\Issa\OneDrive\Documents\Zahra Vs"
$bad = @()
foreach ($h in Get-ChildItem -Filter *.html) {
    $text = Get-Content $h -Raw
    $matches = [regex]::Matches($text, 'assets/products/[^"\r\n\']+')
    foreach ($m in $matches) {
        if (-not (Test-Path $m.Value)) {
            $bad += [pscustomobject]@{ File = $h.Name; Ref = $m.Value }
        }
    }
}
if ($bad.Count -eq 0) {
    Write-Output 'No broken asset references found.'
} else {
    $bad | Sort-Object Ref | Format-Table -AutoSize
}
