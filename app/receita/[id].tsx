import { useLocalSearchParams, router } from 'expo-router'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import receitas from '../../receitas.json'

export default function Receita() {
    const { id } = useLocalSearchParams<{ id: string }>()

    const receita = receitas.find(
        r => r.id === Number(id)
    )

    if (!receita) {
        return (
            <View>
                <Text>Receita não encontrada</Text>
            </View>
        )
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.linhas}>
                {Array.from({ length: 100 }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.linha,
                            { top: index * 32 }
                        ]}
                    />
                ))}
            </View>

            <View style={styles.margem} />

            <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
                <Text style={styles.voltar}>
                    Voltar
                </Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>
                {receita.nome}
            </Text>

            <Text style={styles.subtitulo}>
                Ingredientes
            </Text>

            {receita.ingredientes.map((ingrediente, index) => (
                <Text
                    key={index}
                    style={styles.texto}
                >
                    • {ingrediente}
                </Text>
            ))}

            <Text style={[styles.subtitulo, { marginTop: 32 }]}>
                Modo de preparo
            </Text>

            <Text style={styles.texto}>
                {receita.modoPreparo}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fffcf4',
        paddingTop: 104,
        paddingBottom: 80,
        paddingLeft: 50,
        paddingRight: 20,
        minHeight: '100%',
    },

    linhas: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    linha: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#b8dfff',
    },

    margem: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 35,
        width: 2,
        backgroundColor: '#ff7b7b',
    },

    titulo: {
        fontFamily: 'fontVovo',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20,
    },

    subtitulo: {
        fontFamily: 'fontVovo',
        fontSize: 23,
        marginTop: 20,
        marginBottom: 10,

    },

    texto: {
        fontFamily: 'fontVovo',
        fontSize: 20,
        lineHeight: 32,
    },

    botaoVoltar: {
        position: 'absolute',
        top: 38,
        left: 50,
        zIndex: 10,
    },

    voltar:
    {
        fontFamily: 'fontVovo',
        fontSize: 20,
    }
})