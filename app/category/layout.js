// react components.
import GetUpdates from "@/components/GetUpdates";

export const metadata = {
  title: "LWS Shop Center | Category",
};

const CategoryLayout = ({ children }) => {
  return (
    <>
      {children}
      <GetUpdates />
    </>
  );
};

export default CategoryLayout;
