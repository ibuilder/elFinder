(function($) {
if (elFinder && elFinder.prototype.options && elFinder.prototype.options.i18n) 
	elFinder.prototype.options.i18n.ru = {
		/* errors */
		'Root directory does not exists'       : 'Корневая директория не существует',
		'Unable to connect to backend'         : 'Не удалось соединиться с сервером',
		'Access denied'                        : 'Доступ запрещен',
		'Invalid backend configuration'        : 'Некорректный ответ сервера',
		'Unknown command'                      : 'Неизвестная команда',
		'Command not allowed'                  : 'Выполнение команды запрещено',
		'Invalid parameters'                   : 'Некорректные параметры',
		'File not found'                       : 'Файл не наден',
		'Invalid name'                         : 'Некорректное имя',
		'File or folder with the same name already exists' : 'Файл или папка с таким именем уже существует',
		'Unable to rename file'                : 'Не удалось переименовать файл',
		'Unable to create folder'              : 'Не удалось создать папку',
		'Unable to create file'                : 'Не удалось создать файл',  
		'No file to upload'                    : 'Нет файлов для загрузки',
		'Select at least one file to upload'   : 'Выберите, как минимум, один файл для загрузки',
		'File exceeds the maximum allowed filesize' : 'Размер файла превышает максимально разрешенный размер',
		'Not allowed file type'                : 'Неразрешенный тип файла',
		'Unable to upload file'                : 'Не удалось загрузить файл',
		'Unable to upload files'               : 'Не удалось загрузить файлы',
		'Unable to remove file'                : 'Не удалось удалить файл',
		'Unable to save uploaded file'         : 'Не удалось сохранить загруженый файл',
		'Some files was not uploaded'          : 'Некоторые файлы не удалось загрузить',
		'Unable to copy into itself'           : 'Невозможно скопировать в себя',
		'Unable to move files'                 : 'Не удалось переместить файлы',
		'Unable to copy files'                 : 'Не удалось скопировать файлы',
		'Unable to create file copy'           : 'Не удалось создать копию файла',
		'File is not an image'                 : 'Файл не является изображением',
		'Unable to resize image'               : 'Не удалось изменить размеры изображения',
		'Unable to write to file'              : 'Не удалось записать файл',
		'Unable to create archive'             : 'Не удлось создать архив',
		'Unable to extract files from archive' : 'Не удалось извлечь файлы из архива',
		'Unable to open broken link'           : 'Невозможно открыть битую ссылку',
		/* statusbar */
		'items'          : 'объектов',
		'selected items' : 'выбрано объектов',
		/* commands/buttons */
		'Back'               : 'Назад',
		'Reload'             : 'Обновить',
		'Open'               : 'Открыть',
		'Select file'        : 'Выбрать файл',
		'New folder'         : 'Новая папка',
		'New text file'      : 'Новый файл',
		'Upload files'       : 'Загрузить файлы',
		'Copy'               : 'Копировать',
		'Cut'                : 'Вырезать',
		'Paste'              : 'Вставить',
		'Duplicate'          : 'Дублировать',
		'Remove'             : 'Удалить',
		'Rename'             : 'Переименовать',
		'Edit text files'    : 'Редактировать файл',
		'View as icons'      : 'Иконки',
		'View as list'       : 'Список',
		'Create archive'     : 'Новый архив',
		'Uncompress archive' : 'Распаковать архив',
		'Get info'           : 'Свойства',
		'Help'               : 'Помощь',
		/* upload/get info dialogs */
		'Maximum allowed files size' : 'Максимальный размер файлов',
		'Add field'   : 'Добавить поле',
		'File info'   : 'Свойства файла',
		'Folder info' : 'Свойства папки',
		'Name'        : 'Имя',
		'Kind'        : 'Тип',
		'Size'        : 'Размер',
		'Modified'    : 'Изменен',
		'Permissions' : 'Доступ',
		'Link to'     : 'Указывает',
		'Dimensions'  : 'Разрешение',
		'Confirmation required' : 'Требуется подтверждение',
		'Are you shure you want to remove files?<br /> This cannot be undone!' : 'Вы уверены, что хотите удалить файл? <br />Действие необратимо.',
		/* permissions */
		'read'        : 'чтение',
		'write'       : 'запись',
		'remove'      : 'удаление',
		/* dates */
		'Jan'         : 'Янв',
		'Feb'         : 'Фев',
		'Mar'         : 'Мар',
		'Apr'         : 'Апр',
		'May'         : 'Май',
		'Jun'         : 'Июнь',
		'Jul'         : 'Июль',
		'Aug'         : 'Авг',
		'Sep'         : 'Сен',
		'Oct'         : 'Окт',
		'Nov'         : 'Ноя',
		'Dec'         : 'Дек',
		'Today'       : 'Сегодня',
		'Yesterday'   : 'Вчера',
		/* mimetypes */
		'Unknown'                           : 'Неизвестный',
		'Folder'                            : 'Папка',
		'Alias'                             : 'Ссылка',
		'Broken alias'                      : 'Битая ссылка',
		'Plain text'                        : 'Обычный текст',
		'Postscript document'               : 'Документ postscript',
		'Application'                       : 'Приложение',
		'Microsoft Office document'         : 'Документ Microsoft Office',
		'Microsoft Word document'           : 'Документ Microsoft Word',  
		'Microsoft Excel document'          : 'Документ Microsoft Excel',
		'Microsoft Powerpoint presentation' : 'Презентация Microsoft Powerpoint',
		'Open Office document'              : 'Документ Open Office',
		'Flash application'                 : 'Приложение Flash',
		'XML document'                      : 'Документ XML',
		'Bittorrent file'                   : 'Bittorrent файл',
		'7z archive'                        : 'Архив 7z',
		'TAR archive'                       : 'Архив TAR',
		'GZIP archive'                      : 'Архив GZIP',
		'BZIP archive'                      : 'Архив BZIP',
		'ZIP archive'                       : 'Архив ZIP',
		'RAR archive'                       : 'Архив RAR',
		'Javascript application'            : 'Приложение Javascript',
		'PHP source'                        : 'Исходник PHP',
		'HTML document'                     : 'Документ HTML',
		'Javascript source'                 : 'Исходник Javascript',
		'CSS style sheet'                   : 'Таблица стилей CSS',
		'C source'                          : 'Исходник C',
		'C++ source'                        : 'Исходник C++',
		'Unix shell script'                 : 'Скрипт Unix shell',
		'Python source'                     : 'Исходник Python',
		'Java source'                       : 'Исходник Java',
		'Ruby source'                       : 'Исходник Ruby',
		'Perl script'                       : 'Скрипт Perl',
		'BMP image'                         : 'Изображение BMP',
		'JPEG image'                        : 'Изображение JPEG',
		'GIF Image'                         : 'Изображение GIF',
		'PNG Image'                         : 'Изображение PNG',
		'TIFF image'                        : 'Изображение TIFF',
		'Adobe Photoshop image'             : 'Изображение Adobe Photoshop',
		'MPEG audio'                        : 'Аудио MPEG',
		'MIDI audio'                        : 'Аудио MIDI',
		'Ogg Vorbis audio'                  : 'Аудио Ogg Vorbis',
		'MP4 audio'                         : 'Аудио MP4',
		'WAV audio'                         : 'Аудио WAV',
		'DV video'                          : 'Видео DV',
		'MP4 video'                         : 'Видео MP4',
		'MPEG video'                        : 'Видео MPEG',
		'AVI video'                         : 'Видео AVI',
		'Quicktime video'                   : 'Видео Quicktime',
		'WM video'                          : 'Видео WM',
		'Flash video'                       : 'Видео Flash',
		
		
		
		
		
		
		'Shortcuts' : 'Клавиши',		
		'Authors'                       : 'Авторы',
		'Sponsors'  : 'Спонсоры',
		'elFinder: Web file manager'    : 'elFinder: Файловый менеджер для Web',
		'Version'                       : 'Версия',
		'Copyright: Studio 42 LTD'      : 'Copyright: Студия 42',
		'Javascripts/php programming: Dmitry (dio) Levashov, dio@std42.ru' : 'Программирование Javascripts/php: Дмитрий (dio) Левашов, dio@std42.ru',
		'Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru' : 'Программирование Python, техподдержка: Troex Nevelin, troex@fury.scancode.ru',
		'Design: Valentin Razumnih'     : 'Дизайн: Валентин Разумных',
		'License: BSD License'          : 'Лицензия: BSD License',
		'helpText' : 'elFinder работает аналогично файловому менеджеру в вашем компьютере.<br />Манипулировать файлами можно с помощью кнопок на верхней панели или контекстного меню. Скопировать/переместить файлы можно, перетащив их в нужную папку. Если при перетаскивании файлов нажата клавиша Shift - файлы будут скопированы, в противном случае - перемещены.<br/><br/>elFinder поддерживает следующие сочетания клавиш:'
		
	};
	
})(jQuery);