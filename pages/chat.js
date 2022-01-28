import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
        const[mensagem,setMensagem]=React.useState('');
        const[listaDeMensagens,setListaDeMensagens]=React.useState([]);

    // Usuário
/*
-usuário digita no campo textarea
-aperta enter para enviar 
-apertar enter para enviar
-tem que adicionar o texto na listagem
//Dev
-(x)Campo criado
-()vamos usar o Onchange usa o useState(ter if pra caso seja enter pra limnpar a variável)
-()lista de mensagens
*/
    // ./Sua lógica vai aqui
    function handleNovaMensagem(novaMensagem){
        setListaDeMensagens([
            ...listaDeMensagens,
            novaMensagem,
        ]);
        setMensagem('');
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.themes.color.neutros[500],
                backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.themes.color.neutros['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.themes.color.neutros[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.themes.color.neutros[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                 
Lista de mensagens: {listaDeMensagens.map((mensagemAtual)=>{
    console.log(mensagemAtual)
    return(
<li>
    {mensagemAtual}
</li>
    )
})}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                        value={mensagem}
                        onChange={(event) =>{
                            const valor = event.target.value;
                            setMensagem(valor);
                        } }
                        onKeyPress= {(event) => {
                            if(event.key === 'Enter'){ 
                            event.preventDefault(); 
                            handleNovaMensagem(mensagem);
                            }
                           }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.themes.color.neutros[800],
                                marginRight: '12px',
                                color: appConfig.themes.color.neutros[200],
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log('MessageList', props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.themes.color.neutros["000"],
                marginBottom: '16px',
            }}
        >

            <Text
                key={mensagem.id}
                tag="li"
                styleSheet={{
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                        backgroundColor: appConfig.themes.color.neutros[700],
                    }
                }}
            >
                <Box
                    styleSheet={{
                        marginBottom: '8px',
                    }}
                >
                    <Image
                        styleSheet={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px',
                        }}
                        src={`https://github.com/vanessametonini.png`}
                    />
                    <Text tag="strong">
                        {mensagem.de}
                    </Text>
                    <Text
                        styleSheet={{
                            fontSize: '10px',
                            marginLeft: '8px',
                            color: appConfig.themes.color.neutros[300],
                        }}
                        tag="span"
                    >
                        {(new Date().toLocaleDateString())}
                    </Text>
                </Box>
                {mensagem.texto}
            </Text>
        </Box>
    )
}