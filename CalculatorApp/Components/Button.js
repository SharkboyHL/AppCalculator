import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme }) => {
    const estiloBotoes =  [styles.button];
    const estiloTexto = [styles.text];

    if (size === "double") {
        estiloBotoes.push(styles.botaoDuplo);
    }

    if (theme === "secondary") {
        estiloBotoes.push(styles.botaoSecundario);
        estiloTexto.push(styles.textoSecundario);
    } else if (theme === "accent") {
        estiloBotoes.push(styles.buttonAccent);
    }

    return (
        <TouchableOpacity onPress={onPress} style={estiloBotoes}>
            <Text style={estiloTexto}>{text}</Text>
        </TouchableOpacity>
    );
};

const tela = Dimensions.get("janela");
const botaoLargura = screen.width / 4;

const estilos = StyleSheet.create({
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: Math.floor(botaoLargura - 10),
        margin: 5,
    },

    text: {
        color: "#fff",
        fontSize: 24,
    },

    textoSecundario: {
        color: "#060606",
    },

    botaoDuplo: {
        width: tela.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40,
    },

    botaoSecundario: {
        backgroundColor: "#a6a6a6",
    },

    buttonAccent: {
        backgroundColor: "#ffc107"
    },
});