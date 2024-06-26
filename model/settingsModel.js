// settingsModel.js
const mongoose = require ("mongoose");

const settingsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    globalNotificationDays: { type: Number, default: 10 }, // Nombre de jours avant l'expiration pour les notifications globales
    customNotifications: [{ // Paramètres de notification personnalisés pour des services spécifiques
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: false },
    notificationDays: { type: Number, default: 10 } // Nombre de jours avant l'expiration pour ce service spécifique
    }]
});

const Settings = mongoose.model('Settings', settingsSchema);
module.exports = Settings;
