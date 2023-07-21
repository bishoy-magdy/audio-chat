import chatSocketDefinition from './chatSocketDefinition';
import handshakeSocketDefinition from './handshakeSocketDefinition';
import joinSocketDefinition from './joinSocketDefinition';
import roomLogoutDefinition from './roomLogoutDefinition';
import rtcSocketDefinition from './rtcSocketDefinition';

const setSocketDefinitions = () => {
    handshakeSocketDefinition();
    joinSocketDefinition();
    chatSocketDefinition();
    rtcSocketDefinition();
    roomLogoutDefinition();
};

export default setSocketDefinitions;
