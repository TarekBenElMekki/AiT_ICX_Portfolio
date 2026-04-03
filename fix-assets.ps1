$ErrorActionPreference = "Stop"

$projectRoot = "C:\Users\tarek\Downloads\here-tunisia"
$publicAssets = Join-Path $projectRoot "public\assets"

Write-Host "Fixing Here Tunisia asset structure..." -ForegroundColor Cyan

# Ensure required folders exist
$requiredDirs = @(
    (Join-Path $publicAssets "promo"),
    (Join-Path $publicAssets "kitchen"),
    (Join-Path $publicAssets "destinations"),
    (Join-Path $publicAssets "about")
)

foreach ($dir in $requiredDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Created folder: $dir"
    }
}

# 1) promo/video-cover.png -> promo/video-cover.jpg
$videoCoverPng = Join-Path $publicAssets "promo\video-cover.png"
$videoCoverJpg = Join-Path $publicAssets "promo\video-cover.jpg"

if (Test-Path $videoCoverPng) {
    Copy-Item $videoCoverPng $videoCoverJpg -Force
    Write-Host "Created: $videoCoverJpg from video-cover.png" -ForegroundColor Green
} else {
    Write-Warning "Missing source: $videoCoverPng"
}

# 2) about/flag-badge.jpg -> about/flag-badge.png
$flagBadgeJpg = Join-Path $publicAssets "about\flag-badge.jpg"
$flagBadgePng = Join-Path $publicAssets "about\flag-badge.png"

if (Test-Path $flagBadgeJpg) {
    Copy-Item $flagBadgeJpg $flagBadgePng -Force
    Write-Host "Created: $flagBadgePng from flag-badge.jpg" -ForegroundColor Green
} else {
    Write-Warning "Missing source: $flagBadgeJpg"
}

# 3) destinations png -> jpg duplicates
$destinationNames = @("djerba", "el-jem", "medina", "sidi-bou-said")

foreach ($name in $destinationNames) {
    $src = Join-Path $publicAssets "destinations\$name.png"
    $dst = Join-Path $publicAssets "destinations\$name.jpg"

    if (Test-Path $src) {
        Copy-Item $src $dst -Force
        Write-Host "Created: $dst from $src" -ForegroundColor Green
    } else {
        Write-Warning "Missing source: $src"
    }
}

# 4) detect still-missing required files
$expectedFiles = @(
    "promo\video-cover.jpg",
    "promo\polaroid-left.jpg",
    "promo\polaroid-right.jpg",
    "kitchen\harissa.jpg",
    "kitchen\fricasse.jpg",
    "kitchen\couscous.jpg",
    "destinations\djerba.jpg",
    "destinations\sidi-bou-said.jpg",
    "destinations\el-jem.jpg",
    "destinations\medina.jpg",
    "about\group-photo.jpg",
    "about\flag-badge.png"
)

Write-Host ""
Write-Host "Checking expected assets..." -ForegroundColor Cyan

$missing = @()
foreach ($relativePath in $expectedFiles) {
    $fullPath = Join-Path $publicAssets $relativePath
    if (Test-Path $fullPath) {
        Write-Host "[OK] $relativePath" -ForegroundColor Green
    } else {
        Write-Host "[MISSING] $relativePath" -ForegroundColor Yellow
        $missing += $relativePath
    }
}

Write-Host ""
if ($missing.Count -eq 0) {
    Write-Host "All required assets are now present." -ForegroundColor Green
} else {
    Write-Host "Still missing these files:" -ForegroundColor Yellow
    $missing | ForEach-Object { Write-Host " - $_" }
}

Write-Host ""
Write-Host "Done." -ForegroundColor Cyan