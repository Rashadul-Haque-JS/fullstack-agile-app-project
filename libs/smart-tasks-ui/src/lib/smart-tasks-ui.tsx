import styles from './smart-tasks-ui.module.scss';

/* eslint-disable-next-line */
export interface SmartTasksUiProps {}

export function SmartTasksUi(props: SmartTasksUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SmartTasksUi!</h1>
    </div>
  );
}

export default SmartTasksUi;
