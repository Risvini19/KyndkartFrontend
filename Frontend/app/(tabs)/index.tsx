import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Switch, ScrollView, Modal, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons';

import type { NavigationProp } from '@react-navigation/native';

// Localization strings for all supported languages
type Language = 'English' | 'Tamil' | 'Sinhala';

const translations: Record<Language, { [key: string]: string }> = {
  English: {
    settings: "Settings",
    preferences: "Preferences",
    notifications: "Notifications",
    darkMode: "Dark Mode",
    language: "Language",
    support: "Support",
    privacyPolicy: "Privacy Policy",
    helpAndSupport: "Help & Support",
    backToHome: "Back to Home",
    selectLanguage: "Select Language"
  },
  Tamil: {
    settings: "அமைப்புகள்",
    preferences: "விருப்பங்கள்",
    notifications: "அறிவிப்புகள்",
    darkMode: "இருண்ட பயன்முறை",
    language: "மொழி",
    support: "ஆதரவு",
    privacyPolicy: "தனியுரிமைக் கொள்கை",
    helpAndSupport: "உதவி & ஆதரவு",
    backToHome: "முகப்புக்குத் திரும்பு",
    selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்"
  },
  Sinhala: {
    settings: "සැකසුම්",
    preferences: "මනාපයන්",
    notifications: "දැනුම්දීම්",
    darkMode: "අඳුරු ප්‍රකාරය",
    language: "භාෂාව",
    support: "සහාය",
    privacyPolicy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
    helpAndSupport: "උදව් සහ සහාය",
    backToHome: "මුල් පිටුවට ආපසු",
    selectLanguage: "භාෂාව තෝරන්න"
  }
};

export default function SettingsScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('English');
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  
  // Get translations for currently selected language
  const [strings, setStrings] = useState(translations.English);

  // Update strings when language changes
  useEffect(() => {
    setStrings(translations[selectedLanguage]);
  }, [selectedLanguage]);

  const languages = [
    { id: '1', name: 'English' },
    { id: '2', name: 'Tamil' },
    { id: '3', name: 'Sinhala' },
  ];

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);
  
  const openLanguageModal = () => setLanguageModalVisible(true);
  const closeLanguageModal = () => setLanguageModalVisible(false);
  
  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    closeLanguageModal();
  };

  // Define light and dark theme styles
  const themeStyles = darkModeEnabled ? darkStyles : lightStyles;

  return (
    <ThemedView style={[styles.container, themeStyles.container]}>
      <View style={[styles.header, themeStyles.header]}>
        <ThemedText type="title" style={[styles.headerTitle, themeStyles.headerTitle]}>{strings.settings}</ThemedText>
      </View>

      <ScrollView style={[styles.settingsContainer, themeStyles.settingsContainer]}>
        {/* Preferences Section */}
        <View style={[styles.sectionCard, themeStyles.sectionCard]}>
          <ThemedText type="subtitle" style={[styles.sectionTitle, themeStyles.sectionTitle]}>{strings.preferences}</ThemedText>
          
          <View style={[styles.settingRow, themeStyles.settingRow]}>
            <View style={styles.settingLabelContainer}>
              <FontAwesome name="bell" size={20} color={darkModeEnabled ? "#aaa" : "#555"} style={styles.settingIcon} />
              <ThemedText style={[styles.settingLabel, themeStyles.settingLabel]}>{strings.notifications}</ThemedText>
            </View>
            <Switch
              trackColor={{ false: "#d1d1d1", true: "#7cd3a8" }}
              thumbColor={notificationsEnabled ? "#198754" : "#f4f3f4"}
              onValueChange={toggleNotifications}
              value={notificationsEnabled}
            />
          </View>

          <View style={[styles.settingRow, themeStyles.settingRow]}>
            <View style={styles.settingLabelContainer}>
              <FontAwesome name="moon-o" size={20} color={darkModeEnabled ? "#aaa" : "#555"} style={styles.settingIcon} />
              <ThemedText style={[styles.settingLabel, themeStyles.settingLabel]}>{strings.darkMode}</ThemedText>
            </View>
            <Switch
              trackColor={{ false: "#d1d1d1", true: "#7cd3a8" }}
              thumbColor={darkModeEnabled ? "#198754" : "#f4f3f4"}
              onValueChange={toggleDarkMode}
              value={darkModeEnabled}
            />
          </View>
          
          <TouchableOpacity 
            style={[styles.settingRow, themeStyles.settingRow]}
            onPress={openLanguageModal}
          >
            <View style={styles.settingLabelContainer}>
              <FontAwesome name="language" size={20} color={darkModeEnabled ? "#aaa" : "#555"} style={styles.settingIcon} />
              <ThemedText style={[styles.settingLabel, themeStyles.settingLabel]}>{strings.language}</ThemedText>
            </View>
            <View style={styles.languageSelector}>
              <ThemedText style={[styles.selectedLanguage, themeStyles.selectedLanguage]}>{selectedLanguage}</ThemedText>
              <FontAwesome name="chevron-right" size={16} color={darkModeEnabled ? "#aaa" : "#555"} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={[styles.sectionCard, themeStyles.sectionCard]}>
          <ThemedText type="subtitle" style={[styles.sectionTitle, themeStyles.sectionTitle]}>{strings.support}</ThemedText>
          
          <TouchableOpacity style={[styles.settingRow, themeStyles.settingRow]}>
            <View style={styles.settingLabelContainer}>
              <FontAwesome name="shield" size={20} color={darkModeEnabled ? "#aaa" : "#555"} style={styles.settingIcon} />
              <ThemedText style={[styles.settingLabel, themeStyles.settingLabel]}>{strings.privacyPolicy}</ThemedText>
            </View>
            <FontAwesome name="chevron-right" size={16} color={darkModeEnabled ? "#aaa" : "#555"} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, themeStyles.settingRow]}>
            <View style={styles.settingLabelContainer}>
              <FontAwesome name="question-circle" size={20} color={darkModeEnabled ? "#aaa" : "#555"} style={styles.settingIcon} />
              <ThemedText style={[styles.settingLabel, themeStyles.settingLabel]}>{strings.helpAndSupport}</ThemedText>
            </View>
            <FontAwesome name="chevron-right" size={16} color={darkModeEnabled ? "#aaa" : "#555"} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Language Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={closeLanguageModal}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, themeStyles.modalContent]}>
            <View style={[styles.modalHeader, themeStyles.modalHeader]}>
              <ThemedText style={[styles.modalTitle, themeStyles.modalTitle]}>{strings.selectLanguage}</ThemedText>
              <TouchableOpacity onPress={closeLanguageModal}>
                <FontAwesome name="times" size={22} color={darkModeEnabled ? "#fff" : "#000"} />
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={languages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.languageItem,
                    themeStyles.languageItem,
                    selectedLanguage === item.name && styles.selectedLanguageItem,
                    selectedLanguage === item.name && themeStyles.selectedLanguageItem,
                  ]}
                  onPress={() => selectLanguage(item.name as Language)}
                >
                  <ThemedText style={[
                    styles.languageItemText,
                    themeStyles.languageItemText,
                    selectedLanguage === item.name && styles.selectedLanguageItemText,
                    selectedLanguage === item.name && themeStyles.selectedLanguageItemText,
                  ]}>
                    {item.name}
                  </ThemedText>
                  {selectedLanguage === item.name && (
                    <FontAwesome name="check" size={16} color="#198754" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Back to Home Button */}
      <TouchableOpacity
        style={[styles.backToHomeButton, themeStyles.backToHomeButton]}
        onPress={() => navigation.navigate('Home')} // Navigate to Home screen
      >
        <ThemedText style={[styles.backToHomeButtonText, themeStyles.backToHomeButtonText]}>{strings.backToHome}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

// Base styles (common for both themes)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsContainer: {
    flex: 1,
    padding: 16,
  },
  sectionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  settingLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 16,
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedLanguage: {
    fontSize: 16,
    marginRight: 10,
  },
  backToHomeButton: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  backToHomeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  languageItemText: {
    fontSize: 16,
  },
  selectedLanguageItem: {
    backgroundColor: 'rgba(25, 135, 84, 0.1)',
    borderRadius: 8,
  },
  selectedLanguageItemText: {
    fontWeight: 'bold',
    color: '#198754',
  },
});

// Light theme styles
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
  },
  headerTitle: {
    color: '#000',
  },
  settingsContainer: {
    backgroundColor: '#f5f5f5',
  },
  sectionCard: {
    backgroundColor: '#fff',
  },
  sectionTitle: {
    color: '#000',
  },
  settingRow: {
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    color: '#000',
  },
  selectedLanguage: {
    color: '#555',
  },
  backToHomeButton: {
    backgroundColor: '#fff',
    borderTopColor: '#eee',
  },
  backToHomeButtonText: {
    color: '#000',
  },
  modalContent: {
    backgroundColor: '#fff',
  },
  modalHeader: {
    borderBottomColor: '#eee',
  },
  modalTitle: {
    color: '#000',
  },
  languageItem: {
    borderBottomColor: '#f0f0f0',
  },
  languageItemText: {
    color: '#000',
  },
  selectedLanguageItem: {
    backgroundColor: 'rgba(25, 135, 84, 0.1)',
  },
  selectedLanguageItemText: {
    color: '#198754',
  },
});

// Dark theme styles
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#1e1e1e',
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
  },
  settingsContainer: {
    backgroundColor: '#121212',
  },
  sectionCard: {
    backgroundColor: '#1e1e1e',
  },
  sectionTitle: {
    color: '#fff',
  },
  settingRow: {
    borderBottomColor: '#333',
  },
  settingLabel: {
    color: '#fff',
  },
  selectedLanguage: {
    color: '#aaa',
  },
  backToHomeButton: {
    backgroundColor: '#1e1e1e',
    borderTopColor: '#333',
  },
  backToHomeButtonText: {
    color: '#fff',
  },
  modalContent: {
    backgroundColor: '#1e1e1e',
  },
  modalHeader: {
    borderBottomColor: '#333',
  },
  modalTitle: {
    color: '#fff',
  },
  languageItem: {
    borderBottomColor: '#333',
  },
  languageItemText: {
    color: '#fff',
  },
  selectedLanguageItem: {
    backgroundColor: 'rgba(25, 135, 84, 0.1)',
  },
  selectedLanguageItemText: {
    color: '#198754',
  },
});