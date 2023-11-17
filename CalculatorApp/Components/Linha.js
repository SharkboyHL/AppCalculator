import { StyleSheet, View } from "react-native";

const Linha = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const estilo = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});

export default Linha;