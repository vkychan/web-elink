
import React, { useEffect } from 'react';
import { Notification } from '../types';
import '../App.css';

interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss: (id: string) => void;
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({ notifications, onDismiss }) => {
  // Only show the last 2 notifications to keep the UI clean
  const visibleNotifications = notifications.slice(-2);

  return (
    <div className="sky-math-notification-container">
      {visibleNotifications.map((notif) => (
        <NotificationItem key={notif.id} notification={notif} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const NotificationItem: React.FC<{ notification: Notification; onDismiss: (id: string) => void }> = ({
  notification,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(notification.id), 2500);
    return () => clearTimeout(timer);
  }, [notification.id, onDismiss]);

  return (
    <div className={`sky-math-notification-item ${notification.type}`}>
      <span className="sky-math-notification-message">{notification.message}</span>
      <div className="sky-math-notification-indicator" />
    </div>
  );
};
