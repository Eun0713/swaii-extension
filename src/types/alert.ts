export type AlertType = "success" | "error";

export interface AlertState {
  message: string;
  type: AlertType;
  visible: boolean;
}
