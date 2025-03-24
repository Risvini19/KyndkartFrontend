import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';

// Beautiful Logo Component
function AppLogo() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoBackground}>
        <Text style={styles.logoText}>🍽️</Text>
      </View>
    </View>
  );
}

// Welcome Screen Component
function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* App Name */}
      <View style={styles.headerSection}>
        <AppLogo />
        <Text style={styles.welcomeText}>KyndKart</Text>
      </View>

      {/* Welcome Message */}
      <View style={styles.contentSection}>
        <Text style={styles.descriptionText}>
          "Join us in making a difference by connecting with NGOs and supporting meaningful causes. 
          Whether you're donating essentials or lending a helping hand, every contribution counts.
          Let’s get started—create your account today and be a part of the change!"
        </Text>
      </View>

      {/* Next Button at Bottom */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Login Screen Component
type LoginScreenProps = {
  onLogin: (email: string) => void;
  onGoToRegister: () => void;
};

function LoginScreen({ onLogin, onGoToRegister }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '') {
      onLogin(email);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* Login Title */}
        <Text style={styles.loginTitle}>Login To Your Account</Text>

        {/* Email Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Register Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={onGoToRegister}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Registration Screen Component
type RegisterScreenProps = {
  onRegister: () => void;
  onGoToLogin: () => void;
};

function RegisterScreen({ onRegister, onGoToLogin }: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && password === confirmPassword) {
      onRegister();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* Register Title */}
        <Text style={styles.loginTitle}>Create New Account</Text>

        {/* Name Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Confirm Password Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Login Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already have an account? </Text>
          <TouchableOpacity onPress={onGoToLogin}>
            <Text style={styles.registerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// OTP Verification Screen Component
type OtpVerificationScreenProps = {
  email: string;
  onVerify: () => void;
  onResend: () => void;
};

function OtpVerificationScreen({ email, onVerify, onResend }: OtpVerificationScreenProps) {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp.trim() !== '') {
      onVerify();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.loginContainer}>
        {/* Logo at Top Center */}
        <View style={styles.loginLogoContainer}>
          <AppLogo />
        </View>

        {/* OTP Verification Title */}
        <Text style={styles.loginTitle}>OTP Verification</Text>

        {/* OTP Instructions */}
        <Text style={styles.otpInstructions}>
          Enter 4 digit code sent to your E-mail {email}
        </Text>

        {/* OTP Field */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
        </View>

        {/* Resend OTP Link */}
        <TouchableOpacity style={styles.resendOtp} onPress={onResend}>
          <Text style={styles.resendOtpText}>Didn’t receive a code? Resend.</Text>
        </TouchableOpacity>

        {/* Verify Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleVerify}>
          <Text style={styles.loginButtonText}>Verify</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// HomeScreen Component
type HomeScreenProps = {
  onLogout: () => void;
  onSettingsPress: () => void;
  onActivityPress: () => void;
  onAccountPress: () => void;
};

function HomeScreen({ onLogout, onSettingsPress, onActivityPress, onAccountPress }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <AppLogo />
          <Text style={styles.welcomeText}>Welcome to KyndKart</Text>
        </View>

        {/* Donors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Donors</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Recent Donors</Text>
            <TouchableOpacity style={styles.viewMoreButton}>
              <Text style={styles.viewMoreButtonText}>View More {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Donations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Donations</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Recent Donations</Text>
            <TouchableOpacity style={styles.viewMoreButton}>
              <Text style={styles.viewMoreButtonText}>View More {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={onSettingsPress}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={onActivityPress}>
          <Text style={styles.navButtonText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={onAccountPress}>
          <Text style={styles.navButtonText}>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Settings Component
function Settings({ onGoBack }: { onGoBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.settingsTitle}>Settings</Text>
        </View>

        {/* Settings Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Notifications</Text>
            <Text style={styles.cardText}>Theme</Text>
            <Text style={styles.cardText}>Language</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Change Password</Text>
            <Text style={styles.cardText}>Privacy Settings</Text>
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Activity Component
function Activity({ onGoBack }: { onGoBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Activity</Text>
        </View>

        {/* Activity Logs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Donation made to NGO XYZ</Text>
            <Text style={styles.cardText}>Donation received from ABC</Text>
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Account Component
function Account({ onGoBack }: { onGoBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Account</Text>
        </View>

        {/* Account Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Name: John Doe</Text>
            <Text style={styles.cardText}>Email: john.doe@example.com</Text>
            <Text style={styles.cardText}>Phone: +1234567890</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Change Password</Text>
            <Text style={styles.cardText}>Two-Factor Authentication</Text>
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Main App Component
export default function KyndKartApp() {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // 'welcome', 'login', 'register', 'otp', 'home', 'settings', 'activity', 'account'
  const [userEmail, setUserEmail] = useState('');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={() => setCurrentScreen('login')} />;
      case 'login':
        return (
          <LoginScreen
            onLogin={(email) => {
              setUserEmail(email);
              setCurrentScreen('otp');
            }}
            onGoToRegister={() => setCurrentScreen('register')}
          />
        );
      case 'register':
        return (
          <RegisterScreen
            onRegister={() => setCurrentScreen('home')}
            onGoToLogin={() => setCurrentScreen('login')}
          />
        );
      case 'otp':
        return (
          <OtpVerificationScreen
            email={userEmail}
            onVerify={() => setCurrentScreen('home')}
            onResend={() => console.log('Resend OTP')}
          />
        );
      case 'home':
        return (
          <HomeScreen
            onLogout={() => setCurrentScreen('login')}
            onSettingsPress={() => setCurrentScreen('settings')}
            onActivityPress={() => setCurrentScreen('activity')}
            onAccountPress={() => setCurrentScreen('account')}
          />
        );
      case 'settings':
        return <Settings onGoBack={() => setCurrentScreen('home')} />;
      case 'activity':
        return <Activity onGoBack={() => setCurrentScreen('home')} />;
      case 'account':
        return <Account onGoBack={() => setCurrentScreen('home')} />;
      default:
        return <WelcomeScreen onNext={() => setCurrentScreen('login')} />;
    }
  };

  return <SafeAreaView style={styles.container}>{renderScreen()}</SafeAreaView>;
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5F0',
  },
  scrollView: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loginLogoContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: -40,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006E29',
    marginTop: -50,
  },
  contentSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    lineHeight: 34,
  },
  bottomSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#006E29',
    borderRadius: 25,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  logoContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    marginTop: 80,
  },
  logoBackground: {
    width: 90,
    height: 100,
    borderRadius: 30,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: 'white',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#006E29',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#006E29',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  dividerText: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    fontSize: 14,
    color: '#006E29',
    fontWeight: 'bold',
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 50,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  viewMoreButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  viewMoreButtonText: {
    fontSize: 14,
    color: '#006E29',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: '#006E29',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#006E29',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpInstructions: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  resendOtp: {
    alignSelf: 'center',
    marginTop: 10,
  },
  resendOtpText: {
    fontSize: 14,
    color: '#006E29',
    fontWeight: 'bold',
  },
});