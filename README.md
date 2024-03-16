# Подключение по SSH

- Сначала нужно подключиться к удаленному хосту командой `ssh dm533835@dm533835.ftp.tools`
- Затем параллельно открыть еще одно окно терминала и командой `scp /Users/MyroslavToloshnyi/Desktop/Development/Portfolio/Landings/spring-broom/* dm533835@dm533835.ftp.tools:/home/dm533835/spin.ukrbuy.space/www` переместить все файлы сразу или же только те, которые нужно перезаписать
  - `/Users/MyroslavToloshnyi/Desktop/Development/Portfolio/Landings/spring-broom/*` - это локальный путь к файлам на компьютере, путь к папкам должен меняться в зависимости от расположения файлов
  - `dm533835@dm533835.ftp.tools:/home/dm533835/spin.ukrbuy.space/www` - полный путь к сайту spin.ukrbuy.space, хост тоже может меняться, в зависимости от сайта

# Скачать весь сайт

- Установить `httrack` - `brew install httrack`
- Запустить `httrack https://nabor19v1.prodazh.site  ./kitchen-new`
