module.exports = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'Изменить видео 🎞', callback_data: 'video'
                },
                {
                    text: 'Изменить названия 📖', callback_data: 'name'
                }
            ],
            [
                {
                    text: 'Изменить жанры 🎭', callback_data: 'genre'
                },
                {
                    text: 'Изменить ссылку 🌐', callback_data: 'url'
                }
            ],
            [
                {
                    text: 'Изменить все 🔄', callback_data: 'send'
                }
            ]
        ]
    }
}
    