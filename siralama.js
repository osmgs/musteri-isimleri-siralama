let array1 = ["Zeki", "Mehmet", "Fatma", "Halil", "Ahsen", "Zeynep", "Burak"];
let array2 = ["Halil", "Veli", "Kerim", "Zeki", "Neriman", "Fatma", "Semih"];

// Tüm isimleri içeren yeni bir dizi oluşturun
let tumIsimler = ["Zeki", "Mehmet", "Fatma", "Halil", "Ahsen", "Zeynep", "Burak",
"Halil", "Veli", "Kerim", "Zeki", "Neriman", "Fatma", "Semih" ];

// A'dan Z'ye doğru sıralayın
//let siraliIsimler = tumIsimler.sort(); //burada tum olan isimler gosterilir.

let siraliIsimler = [...new Set(tumIsimler)].sort(); // burada ise tekrar eden isimler bir defa gosterilir.

console.log(siraliIsimler);


/*
Bu kodda, öncelikle iki ayrı dizi olan "array1" ve "array2" tanımlanır. Daha sonra, 
"..." operatörü kullanılarak bu iki dizi tek bir dizi olan "tumIsimler" dizisine kopyalanır.
Son olarak, "sort()" yöntemi kullanılarak "tumIsimler" dizisi A'dan Z'ye doğru sıralanır
ve sonuç "siraliIsimler" değişkeninde saklanır. "console.log()" yöntemi kullanılarak,
sonuç konsola yazdırılır.

Bu örnekte, tüm müşteri isimlerini tek bir diziye kopyalayarak, A'dan Z'ye doğru
sıralayarak yeni bir dizi oluşturduk. Böylece, her iki dizide yer alan aynı
isimler de sadece bir kez yazılmış oldu.

*/