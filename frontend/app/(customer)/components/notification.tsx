type NotificationProps = {
  message: string | null;
  success: boolean;
};

export default function Notification({ message, success }: NotificationProps) {
  if (message === null) {
    return null;
  } else if (success) {
    return (
      <div className="p-2 border border-green-500 bg-green-200">{message}</div>
    );
  } else {
    return (
      <div className="p-2 border border-red-500 bg-red-200">{message}</div>
    );
  }
}
