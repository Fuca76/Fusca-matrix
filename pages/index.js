import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useRouter } from "next/router";
import React from "react";
import appConfig from "../config.json"


function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style JSX>{`
              ${Tag} {
                  color: ${appConfig.themes.color.neutros['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
        </>
    );
}

export default function ChatPage() {
    // const username = 'Fuca76';
    const [username, setUsername] = React.useState('Fuca76');
    const roteamento = useRouter();


    return (
        <>
            < Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '100%', height: '100vh',
                   // backgroundColor: appConfig.themes.color.primary[000],
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/05/10/16/31/oldtimer-3387934_960_720.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.themes.color.neutros[700],
                    }}
                >
                    { /* Formulário */}
                    < Box
                        as="form"
                        onSubmit={function(infosDoEvento) {
                            infosDoEvento.preventDefault();
                           console.log('alguém submeteu o form');
                            roteamento.push('/chat');
                        
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        < Title tag="h2" > Boas vindas de volta! </Title >
                        < Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.themes.color.neutros[300] }}>
                            {appConfig.nome}
                        </Text>
                        <input type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                //Onde ta o valor?
                                const valor = event.target.value;
                                //Trocar o valor da variavel
                                setUsername(valor);
                            }}
                        />

                        {/*< TextField
                            fullWidth
                            textFieldColors={{
                                neutro: {
                                    textColor: appConfig.themes.color.neutros[200],
                                    mainColor: appConfig.themes.color.neutros[900],
                                    mainColorHighlight: appConfig.themes.color.primary[500],
                                    backgroundColor: appConfig.themes.color.primary[800],
                                },
                            }}
                        />*/}
                        < Button
                            type='enviar'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.themes.color.neutros["000"],
                                mainColor: appConfig.themes.color.neutros[500],
                                mainColorLight: appConfig.themes.color.primary[400],
                                mainColorStrong: appConfig.themes.color.primary[600],
                            }}
                        />
                    </Box >
                    { /* Formulário */}


                    { /* Área da foto */}
                    < Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.themes.color.neutros[800],
                            border: '1px sólido',
                            borderColor: appConfig.themes.color.neutros[999],
                            borderRadius: '10px',
                            Flexão: 1,
                            flexDirection: '240px',
                        }}
                    >
                        < Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        < Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.themes.color.neutros[200],
                                backgroundColor: appConfig.themes.color.neutros[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    { /* Área da foto */}
                </Box>
            </Box >
        </>
    );
}