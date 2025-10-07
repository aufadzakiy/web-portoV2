# Test Googlebot Access
Write-Host "Testing sitemap with Googlebot user agent..."
Write-Host ""

try {
    $response = Invoke-WebRequest -Uri 'https://aufa-space.vercel.app/sitemap.xml' -UseBasicParsing -UserAgent 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    
    Write-Host "✅ Status Code:" $response.StatusCode
    Write-Host "✅ Content-Type:" $response.Headers['Content-Type']
    Write-Host "✅ Content-Length:" $response.Headers['Content-Length']
    Write-Host ""
    Write-Host "Sitemap accessible to Googlebot: YES"
} catch {
    Write-Host "❌ Error:" $_.Exception.Message
    Write-Host "Sitemap accessible to Googlebot: NO"
}
