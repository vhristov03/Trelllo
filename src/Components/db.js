import Dexie from 'dexie'

const db = newDexie("TrelloDatabase");

db.version(1).stores({
    logged_user: 'user_id',
    users: '++id, username',
    boards: '++id, user_id, name',
    columns: '++id, board_id, name',
    cards: '++id, board_id, column_id, user_id, title, description, author',
    archived_cards: '++id, board_id, card_id'
});