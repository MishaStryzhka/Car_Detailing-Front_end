## Подготовка к работе

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Установи базовые зависимости проекта командой `npm install`.
3. Запусти режим разработки, выполнив команду `npm start`.
4. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000). Эта страница будет
   автоматически перезагружаться после сохранения изменений в файлах проекта.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша
или принятого пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив `your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и выставить раздачу
продакшн версии файлов из папки `/root` ветки `gh-pages`, если это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в выпадающем окне перейти
по ссылке `Details`.

![Deployment status](./assets/deploy-status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть по адресу указанному
в отредактированном свойстве `homepage`. Например, вот ссылка на живую версию для этого репозитория
[https://github.com/MishaStryzhka/Car_Detailing-Front_end](https://github.com/MishaStryzhka/Car_Detailing-Front_end).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок связанных с
неправильными путями к CSS и JS файлам проекта (**404**). Скорее всего у тебя неправильное значение
свойства `homepage` в файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный скрипт (GitHub
   Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и проходит линтинг и
   сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта отправляется в ветку
   `gh-pages`. В противном случае, в логе выполнения скрипта будет указано в чем проблема.