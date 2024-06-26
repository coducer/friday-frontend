import React, { ReactNode, useMemo, useState } from "react";
import { api } from "../api";

interface DashboardContextInterface {
  handleModals: Function;
  uploadGarments: Function;
  getOrders: Function;
  setActiveSection: (data: string) => void;
  activeScection: string;
  generateImagePrompts: Function;
}

const DashboardContext = React.createContext<DashboardContextInterface | null>(
  null
);

interface ListDashboardProviderProps {
  children: ReactNode;
}

const DashboardProvider = ({ children }: ListDashboardProviderProps) => {
  const [activeScection, setActiveSection] = useState("0");

  const handleModals = async () => {
    try {
      let response = await api?.getModels();
      return response;
    } catch (error) {
      console.error("Error fetching modals:", error);
    }
  };

  const uploadGarments = async (params: any) => {
    try {
      let response = await api?.uploadModals(params);
      return response;
    } catch (error) {}
  };

  const getOrders = async (id: string) => {
    try {
      let response = await api?.getOrder(id);
      return response;
    } catch (error) {}
  };

  const generateImagePrompts = async (params: any, orderId: string) => {
    try {
      let response = await api?.generateImage(params, orderId);
      return response;
    } catch (error) {}
  };
  const value: DashboardContextInterface = useMemo(
    () => ({
      handleModals,
      uploadGarments,
      getOrders,
      setActiveSection,
      activeScection,
      generateImagePrompts,
    }),
    [activeScection]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboards = () => {
  return React.useContext(DashboardContext);
};

export { DashboardProvider, useDashboards };
