import {ChakraProvider, defaultSystem} from '@chakra-ui/react';
import {useEffect} from 'react';
import Mapp from './Map';
import Site from './Site';
import useUserPosition from './useUserPosition';

function App() {
  const {fetchPosition} = useUserPosition();

  useEffect(() => {
    fetchPosition();
  }, []);

  return (
    <ChakraProvider value={defaultSystem}>
      <Site />
    </ChakraProvider>
  );
}

export default App;
