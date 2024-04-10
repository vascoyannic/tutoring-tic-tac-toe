import * as React from "react";
import Header from "./Header";
import Board from "./Board";

const App: React.FC<{}> = () => {
    return <>
        <Header title="Tic Tac Toe against Joe Doe" hasBackIcon={true} />
        <Board />
    </>
}
export default App;