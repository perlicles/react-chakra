import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {

  const sayHello = () => {
    alert("Oi! Agora com Chakra!")
  };

  return (
    <ChakraProvider>
      <h1>Hello React e Chakra</h1>
      <Button onClick={sayHello} colorScheme="red">Click Aqui Para Dizer "Oi!"</Button>
    </ChakraProvider>
  );
}

export default App;
