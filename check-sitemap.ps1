$response = Invoke-WebRequest -Uri 'https://aufa-space.vercel.app/sitemap.xml' -UseBasicParsing
Write-Host "Status Code: $($response.StatusCode)"
Write-Host "Content-Type: $($response.Headers['Content-Type'])"
Write-Host "Content-Length: $($response.Headers['Content-Length'])"
Write-Host "`nFirst 500 chars of content:"
Write-Host $response.Content.Substring(0, [Math]::Min(500, $response.Content.Length))
