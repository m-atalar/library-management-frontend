# Kütüphane Yönetim Sistemi - Frontend

Bu proje, **BDD (Behavior Driven Development)** yaklaşımı ile geliştirilmiş bir kütüphane yönetim sistemi frontend uygulamasıdır.

## Proje Hakkında

Bu proje, Yazılım Gerçekleme dersi kapsamında **TDD/BDD** metodolojisini uygulayarak geliştirilmiştir. Proje, Ruby on Rails API backend'ine bağlanarak kitap listesini görüntüleyen bir Next.js uygulamasıdır.

**Mentorlük:** Nurettin Şenyer ve Ömer Durmuş

## Teknoloji Stack

- **Frontend Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Cypress + Cucumber (BDD)
- **Test Preprocessor:** @badeball/cypress-cucumber-preprocessor
- **Backend API:** Ruby on Rails 8 (API-only)

## BDD Yaklaşımı

Bu projede **Red-Green-Refactor** döngüsü uygulanmıştır:

### 1. RED Phase (Kıpkırmızı - %100 Fail)
- Önce Gherkin formatında test senaryoları yazıldı
- Kod yazılmadan testler çalıştırıldı
- Beklendiği gibi tüm testler başarısız oldu (%100 fail)

### 2. GREEN Phase (Yemyeşil - %100 Success)
- Frontend kodu geliştirildi
- Testler tekrar çalıştırıldı
- Tüm testler başarılı oldu (%100 success)

## Test Senaryosu

```gherkin
Feature: Kitap Listesi Görüntüleme
  Kütüphane yönetim sisteminde kullanıcılar kitapları görüntüleyebilmelidir

  Scenario: Kullanıcı ana sayfada kitap listesini görüntüler
    Given kullanıcı ana sayfada
    When sayfa yüklendiğinde
    Then kitap listesi görünür olmalı
    And en az 1 kitap gösterilmeli
    And her kitap için başlık gösterilmeli
    And her kitap için yazar gösterilmeli
    And her kitap için açıklama gösterilmeli
```

## Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn
- Backend API (Ruby on Rails) çalışır durumda olmalı

### Adımlar

1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd library-frontend
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Backend API'yi çalıştırın (port 3000):
```bash
# Backend dizininde
rails server
```

4. Frontend'i çalıştırın (port 3001):
```bash
npm run dev
```

5. Tarayıcıda açın: http://localhost:3001

## Test Çalıştırma

### Cypress Testlerini Çalıştırma

Headless modda (CI/CD için):
```bash
npm run cypress:run
```

Interaktif modda:
```bash
npm run cypress:open
```

## Proje Yapısı

```
library-frontend/
├── app/
│   ├── page.tsx              # Ana sayfa (kitap listesi)
│   └── layout.tsx            # Root layout
├── cypress/
│   ├── e2e/
│   │   ├── books.feature     # Gherkin test senaryosu
│   │   └── books.ts          # Step definitions
│   ├── support/
│   │   ├── e2e.ts
│   │   └── commands.ts
│   ├── videos/               # Test videoları
│   └── screenshots/          # Test ekran görüntüleri
├── cypress.config.ts         # Cypress konfigürasyonu
└── package.json
```

## Özellikler

- API'den kitap listesini çekme
- Responsive tasarım (Tailwind CSS)
- Loading ve error state'leri
- Kitap detayları (başlık, yazar, açıklama, kategoriler, ISBN, yayın tarihi)
- E2E test coverage (%100)
- BDD yaklaşımı ile geliştirme

## Test Sonuçları

### RED Phase (İlk Test)
- **Test Sayısı:** 1
- **Passing:** 0
- **Failing:** 1
- **Sonuç:** %100 FAIL ✅

### GREEN Phase (İkinci Test)
- **Test Sayısı:** 1
- **Passing:** 1
- **Failing:** 0
- **Sonuç:** %100 SUCCESS ✅

## Demo Video

Test çalışma videosuna [buradan](cypress/videos/) ulaşabilirsiniz.

## API Endpoints

Backend API endpoints:
- `GET /api/v1/books` - Tüm kitapları listele
- `GET /api/v1/books/:id` - Belirli bir kitabı getir

## Geliştirici

Bu proje, Yazılım Gerçekleme dersi kapsamında geliştirilmiştir.

**Mentorlük:** Nurettin Şenyer ve Ömer Durmuş

## Lisans

Bu proje eğitim amaçlıdır.
