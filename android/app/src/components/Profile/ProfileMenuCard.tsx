import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import Profile from '../../assets/icons/profile.svg';
import Notification from '../../assets/icons/notification.svg';
// import Language from '../../assets/icons/language.svg';
import Help from '../../assets/icons/help.svg';
import Contact from '../../assets/icons/contact.svg';
import Privacy from '../../assets/icons/privacy.svg';




export default function ProfileMenuCard() {
  return (
    <>
     <View style={styles.card}>
      
        <TouchableOpacity
         
          style={[styles.row]}
          activeOpacity={0.7}
          
        >
           <Profile width={26} height={26} fill="#2C2C2C" />
          <Text style={styles.text}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
         
          style={[styles.row]}
          activeOpacity={0.7}
          
        >
           <Notification width={26} height={26} fill="#2C2C2C" />
          <Text style={styles.text}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
         
          style={[styles.row]}
          activeOpacity={0.7}
          
        >
           <Profile width={26} height={26} fill="#2C2C2C" />
          <Text style={styles.text}>Language</Text>
        </TouchableOpacity>
        
      
    </View>



     <View style={styles.card}>
      
        <TouchableOpacity
         
          style={[styles.row]}
          activeOpacity={0.7}
          
        >
           <Help width={26} height={26} fill="#2C2C2C" />
          <Text style={styles.text}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity
         
          style={[styles.row]}
          activeOpacity={0.7}
          
        >
           <Contact width={26} height={26} fill="#2C2C2C" />
          <Text style={styles.text}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
         
          style={[styles.row]}
          activeOpacity={0.7}
          
        >
           <Privacy width={26} height={26} fill="#2C2C2C" />
          <Text style={styles.text}>Privacy Policy</Text>
        </TouchableOpacity>
        
      
    </View>
      
    </>
  );
}

const styles = StyleSheet.create({
   divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.15)',
  },
   row: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 14,
    paddingHorizontal: 16,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 12,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    paddingVertical: 26,
    gap: 14,
  },
  item: {
    color: COLORS.white,
    fontSize: 14,
  },
});
