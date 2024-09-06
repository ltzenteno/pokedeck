export interface AlertProps {
  message: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({
  message,
  description,
}) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert"
    >
      <p className="font-medium">Alert</p>
      <p className="font-sm">{message}</p>
      <p className="font-sm">{description}</p>
    </div>
  );
};

export default Alert;
