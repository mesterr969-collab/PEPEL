$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$dist = Join-Path $repoRoot 'dist'
$built = Join-Path $dist 'win-unpacked'
$stageRoot = Join-Path $dist 'package-stage'
$expectedFolder = Join-Path $stageRoot 'PEPEL-win32-x64'
$package = Get-Content (Join-Path $repoRoot 'package.json') -Raw | ConvertFrom-Json
$zipPath = Join-Path $dist ("PEPEL-{0}-Windows-x64.zip" -f $package.version)
if (!(Test-Path -LiteralPath (Join-Path $built 'PEPEL.exe'))) { throw "PEPEL.exe was not found in dist/win-unpacked. Run npm run dist:win on Windows first." }
Remove-Item -LiteralPath $stageRoot -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $expectedFolder -Force | Out-Null
Copy-Item -Path (Join-Path $built '*') -Destination $expectedFolder -Recurse -Force
Remove-Item -LiteralPath $zipPath -Force -ErrorAction SilentlyContinue
Compress-Archive -Path $expectedFolder -DestinationPath $zipPath -CompressionLevel Optimal
Write-Host "Created $zipPath"
Write-Host "Expected updater layout: PEPEL-win32-x64/PEPEL.exe"
