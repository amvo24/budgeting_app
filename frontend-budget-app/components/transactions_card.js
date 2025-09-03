import {View, Text, StyleSheet} from 'react-native'

export default function TransactionCard({transaction}) {
    return (
        <View style={styles.cardContainer}> 
            <View style={styles.innerContainer}>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Text style={styles.text_icon}>ICON HERE</Text>
                    </View>
                </View>
                <View style={styles.descriptionDateContainer}>
                    <View>
                        <Text style={styles.description}>{transaction.description}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text>{transaction.date}</Text>
                    </View>
                </View>
                <View style={styles.amountCategoryContainer}>
                    <View>
                        <Text style={styles.amount}>${transaction.amount}</Text>
                    </View>
                    <View>
                        <Text style={styles.category}>{transaction.category}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    cardContainer: {
        // backgroundColor: 'red',
        backgroundColor: '#fff',
        height: 80,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 15,
        marginRight: 15,
    },
    innerContainer: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        width: '90%',
        height: '80%',
        alignItems: 'center',
    },
    iconContainer: {
        // backgroundColor: 'purple',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        // backgroundColor: 'yellow',
        backgroundColor: 'grey',
        height: '50',
        width: '50',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -20
    },
    text_icon: {
        textAlign: 'center'
    },
    descriptionDateContainer: {
        // backgroundColor: 'orange',
        flex: 2,
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: -20
    }, 
    description: {
        fontWeight: 'bold'
    }, 
    date: {

    }, 
    amountCategoryContainer: {
        // backgroundColor: 'green',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        // textAlign: 'right',
        alignItems: 'flex-end',
    },
    amount: {
        fontWeight: 'bold'
    },
    category: {
        fontWeight: 'bold'

    }

})