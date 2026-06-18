import { TextInput, StyleSheet } from "react-native";

interface CustomInputProps {
    placeholder: string;
    value: any;
    onChangeText: any;
}

export default function CustomInput({ placeholder, value, onChangeText }: CustomInputProps) {

    return(

        <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        />
    )
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#fffaf0',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 20,
        marginHorizontal: 16,

        borderWidth: 1.5,
        borderColor: '#e8dcc6',
    },
})