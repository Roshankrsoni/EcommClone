import { Platform } from 'react-native';
export default styles = {
  headerRightIcon: {
    color: '#fff',
    fontSize: (Platform.OS==='ios') ? 28 : 24
  },
  headerLeftIcon: {
    color: '#fff'
  },
  headerLeftButton: {
    marginLeft: (Platform.OS==='ios') ? -5 : undefined
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#2874F0',
    marginTop: -1,
    padding: 10
  },
  categoryButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#2874F0'
  },
  categoryIcon: {
    fontSize: (Platform.OS==='ios') ? 30 : undefined
  }
};
