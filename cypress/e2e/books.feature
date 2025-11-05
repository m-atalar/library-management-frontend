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
