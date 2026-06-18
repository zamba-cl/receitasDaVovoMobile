import { router } from 'expo-router'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Sobre() {
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
                Sobre esse aplicativo
            </Text>

            <Text style={styles.texto}>
                Receitas da Vovó nasceu com o objetivo de preservar e compartilhar o livro de receitas deixado pela minha avó.
            </Text>

            <Text style={styles.texto}>
                Essas receitas estavam anotadas em um caderninho amarelo, folhas soltas e lembranças guardadas ao longo dos anos.
            </Text>

            <Text style={styles.texto}>
                Este aplicativo foi criado para reunir essas receitas e facilitar o acesso.
                Aqui você encontrará receitas doces e salgadas preparadas ao longo de décadas, mantendo os ingredientes e modos de preparo exatamente como foram registrados originalmente.
                Mais do que um livro de receitas digital, este aplicativo é uma forma de guardar histórias, memórias e sabores.
            </Text>

            <Text style={styles.texto}>
                A fonte das receitas foi criada a mão, especialmente para esse aplicativo, e replica a letra original dela.
            </Text>

            <Text style={styles.texto}>
                Feito com carinho para que essas receitas continuem sendo compartilhadas pelas próximas gerações.
            </Text>

            <Image source={require('../assets/images/fotoFamilia.png')} style={styles.imagem} />

            <Text style={styles.texto}>
                Em memória da nossa avó, que transformava ingredientes simples em receitas inesquecíveis e deixou, através de seu caderno amarelo, 
                uma herança de carinho para toda a família.
            </Text>

            <Text style={styles.texto}>
                Desenvolvido por Carol Zambanini
            </Text>

        </ScrollView>
    );
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
        fontFamily: 'Caveat',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 31,
    },

    texto: {
        marginBottom: 32,
        fontFamily: 'Caveat',
        fontSize: 20,
        lineHeight: 31.89,
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
    },

    imagem:
    {
        width: 250,
        height: 180,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginBottom: 10,
    },
})