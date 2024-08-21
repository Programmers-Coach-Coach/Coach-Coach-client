import { Navigate } from "react-router-dom";

interface Props {
  isAccess: boolean;
  children: React.ReactNode;
}
const PrivateLayout = ({ isAccess, children }: Props) => {
  return isAccess ? children : <Navigate to="/check-password" />;
};

export default PrivateLayout;
