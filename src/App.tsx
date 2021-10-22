import styles from "./App.module.scss";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";

export function App() {
  return (
    <div>
      <main className={styles.contentWrapper}>
        <MessageList />
        <LoginBox />
      </main>
    </div>
  )
}
