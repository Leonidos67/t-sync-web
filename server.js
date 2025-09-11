const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

// MIME типы для различных файлов
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Если путь заканчивается на /, добавляем index.html
    if (pathname.endsWith('/')) {
        pathname += 'index.html';
    }
    
    // Убираем начальный слеш для работы с файловой системой
    const filePath = path.join(__dirname, pathname);
    
    // Проверяем, существует ли файл
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // Файл не найден - показываем 404
            console.log(`404: ${pathname}`);
            serve404(res);
            return;
        }
        
        // Файл найден - отдаем его
        serveFile(res, filePath);
    });
});

function serveFile(res, filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Ошибка чтения файла:', err);
            serve404(res);
            return;
        }
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

function serve404(res) {
    const notFoundPath = path.join(__dirname, '404', 'index.html');
    
    fs.readFile(notFoundPath, (err, data) => {
        if (err) {
            // Если даже 404.html не найден, показываем простую страницу
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>404 - Страница не найдена</title>
                    <meta charset="utf-8">
                </head>
                <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #000; color: #fff;">
                    <h1 style="font-size: 4rem; margin: 0;">404</h1>
                    <h2>Страница не найдена</h2>
                    <p>Запрашиваемая страница не существует.</p>
                    <a href="/" style="color: #00ff88; text-decoration: none;">Вернуться на главную</a>
                </body>
                </html>
            `);
            return;
        }
        
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
}

server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
    console.log('Для остановки нажмите Ctrl+C');
});
