
import { StyleSheet, Platform } from 'react-native'

export default styles = StyleSheet.create({
    headerBtn: {
        marginRight: 16,
        backgroundColor: 'red'
      },
      container: {
        flex: 1,
        flexDirection: 'column'
      },
      containerItem: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fcfcfc',
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
      },
      itemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      title: {
        flex: 1,
        color: '#3c80f7',
        fontSize: 40
    
      },
      user: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        marginLeft: 5
      },
      time: {
        color: '#666',
        fontSize: 14,
        marginTop: 5
      },
      icon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      noData: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
        backgroundColor: '#eeeeec'
      },
      scanBtn: {
        backgroundColor: '#007fff',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 4,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
      },
      scanText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 8
      },
      listView: {
        backgroundColor: '#eeeeec'
      }
})