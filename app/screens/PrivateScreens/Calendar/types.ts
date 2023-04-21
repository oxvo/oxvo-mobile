interface TaskInterface {
  id: number;
  name: string;
  index: number;
  status: number;
  session: string;
  customer: string;
  image: string;
  changeTask?: () => void;
}
export { TaskInterface };
