// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBVxxaASh3JFjyXxNSyCsqBBBrS0GOf8PE",
  authDomain: "changgo-match.firebaseapp.com",
  projectId: "changgo-match",
  storageBucket: "changgo-match.firebasestorage.app",
  messagingSenderId: "87959949264",
  appId: "1:87959949264:web:7711ed81bd31afb62273d5",
  measurementId: "G-YCKLXNH61B"
});

const messaging = firebase.messaging();

// 백그라운드 푸시 알림 수신
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] 백그라운드 메시지 수신:', payload);
  const notificationTitle = payload.notification?.title || '창고의민족 알림';
  const notificationOptions = {
    body: payload.notification?.body || '새로운 소식이 도착했습니다.',
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
