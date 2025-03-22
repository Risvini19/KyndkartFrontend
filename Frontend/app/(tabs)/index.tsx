import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Image, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Text, Pressable, ScrollView, KeyboardAvoidingView, ViewStyle } from 'react-native';
import { useRef } from 'react';

interface OTPVerificationScreenProps {
  otpValues: string[];
  handleOtpChange: (text: string, index: number) => void;
  onVerify: () => void;
}

export default function KyndKartApp() {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login', 'register', 'otp', 'home', 'shopRegister', 'ngoRegister', 'profile'
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('Tharumarasa Risvini');
  const [userEmail, setUserEmail] = useState('risvini2001@gmail.com');
  
  // Screen navigation handlers
  const handleLogin = () => setCurrentScreen('otp');
  const handleVerify = () => setCurrentScreen('home');
  const handleLogout = () => setCurrentScreen('login');
  const handleGoToRegister = () => setCurrentScreen('register');
  const handleGoToLogin = () => setCurrentScreen('login');
  const handleGoToShopRegister = () => setCurrentScreen('shopRegister');
  const handleGoToNGORegister = () => setCurrentScreen('ngoRegister');
  const handleGoToProfile = () => setCurrentScreen('profile');
  const handleGoToHome = () => setCurrentScreen('home');
  
  // Render the appropriate screen
  if (currentScreen === 'home') {
    return <HomeScreen 
      onLogout={handleLogout} 
      onShopRegister={handleGoToShopRegister}
      onNGORegister={handleGoToNGORegister}
      onProfilePress={handleGoToProfile}
    />;
  } else if (currentScreen === 'register') {
    return <RegisterScreen onRegisterComplete={(email: string) => {
      setEmail(email);
      setCurrentScreen('otp');
    }} onGoToLogin={handleGoToLogin} />;
  } else if (currentScreen === 'otp') {
    return <OTPVerificationScreen 
      email={email} 
      otpValues={['', '', '', '']} 
      handleOtpChange={(text, index) => {}} 
      onVerify={handleVerify} 
      onResend={() => {}} 
    />;
  } else if (currentScreen === 'shopRegister') {
    return <ShopRegisterScreen onGoBack={() => setCurrentScreen('home')} onSubmit={() => setCurrentScreen('home')} />;
  } else if (currentScreen === 'ngoRegister') {
    return <NGORegisterScreen onGoBack={() => setCurrentScreen('home')} onSubmit={() => setCurrentScreen('home')} />;
  } else if (currentScreen === 'profile') {
    return <ProfileScreen 
      userName={userName}
      userEmail={userEmail}
      onGoToHome={handleGoToHome}
    />;
  } else {
    return <LoginScreen onLogin={(email) => {
      setEmail(email);
      handleLogin();
    }} onGoToRegister={handleGoToRegister} />;
  }
}

// Updated app logo component with a simple leaf design
function AppLogo() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoBackground}>
        <View style={styles.leafContainer}>
          <View style={[styles.leaf, styles.leftLeaf]} />
          <View style={[styles.leaf, styles.rightLeaf]} />
        </View>
      </View>
    </View>
  );
}

interface HomeScreenProps {
  onLogout: () => void;
  onShopRegister: () => void;
  onNGORegister: () => void;
  onProfilePress: () => void;
}

function HomeScreen({ onLogout, onShopRegister, onNGORegister, onProfilePress }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeContent}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.welcomeText}>Welcome to KyndKart</Text>
        </View>
        
        {/* App Logo */}
        <AppLogo />
        
        {/* App Name */}
        <Text style={styles.appNameLarge}>KyndKart</Text>
        
        {/* Welcome Message */}
        <Text style={styles.loginGreeting}>Thank you for logging in!</Text>
        <Text style={styles.homeDescription}>
        This is your dashboard. Here, you can explore and access all your KyndKart features.
        </Text>
        
        {/* Feature Navigation */}
        <View style={styles.featuresGrid}>
          <View style={styles.featureRow}>
            {/* Shop Button with cart icon */}
            <TouchableOpacity style={styles.featureButton} onPress={onShopRegister}>
              <View style={styles.featureIconContainer}>
                <View style={styles.cartIconContainer}>
                  <View style={styles.cartIcon} />
                  <View style={styles.cartHandle} />
                  <View style={styles.cartWheel1} />
                  <View style={styles.cartWheel2} />
                </View>
              </View>
              <Text style={styles.featureButtonText}>Shop</Text>
            </TouchableOpacity>
            
            {/* Donations Button with heart icon */}
            <TouchableOpacity style={styles.featureButton} onPress={onNGORegister}>
              <View style={styles.featureIconContainer}>
                <View style={styles.heartIconContainer}>
                  <View style={styles.heartShape} />
                </View>
              </View>
              <Text style={styles.featureButtonText}>Donations</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.featureRow}>
            {/* Profile Button with person icon */}
            <TouchableOpacity style={styles.featureButton} onPress={onProfilePress}>
              <View style={styles.featureIconContainer}>
                <View style={styles.personIconContainer}>
                  <View style={styles.personHead} />
                  <View style={styles.personBody} />
                </View>
              </View>
              <Text style={styles.featureButtonText}>Profile</Text>
            </TouchableOpacity>
            
            {/* Settings Button with gear icon */}
            <TouchableOpacity style={styles.featureButton}>
              <View style={styles.featureIconContainer}>
                <View style={styles.gearIconContainer}>
                  <View style={styles.gearOuter} />
                  <View style={styles.gearInner} />
                  <View style={styles.gearTooth1} />
                  <View style={styles.gearTooth2} />
                  <View style={styles.gearTooth3} />
                  <View style={styles.gearTooth4} />
                </View>
              </View>
              <Text style={styles.featureButtonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Logout Button */}
        <TouchableOpacity style={styles.newLogoutButton} onPress={onLogout}>
          <Text style={styles.newLogoutButtonText}>Logout</Text>
        </TouchableOpacity>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </View>
    </SafeAreaView>
  );
}

interface LoginScreenProps {
  onLogin: (email: string) => void;
  onGoToRegister: () => void;
}

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
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        <View style={styles.loginContainer}>
          {/* Updated Logo */}
          <AppLogo />
          
          {/* App Name */}
          <Text style={styles.appName}>KyndKart</Text>
          
          {/* Login Title */}
          <Text style={styles.loginTitle}> Hi,Login To Your Account</Text>
          
          {/* Email Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder=" enter Your Email"
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
            <Text style={styles.registerText}>New here? Create an account to get started! </Text>
            <TouchableOpacity onPress={onGoToRegister}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

interface RegisterScreenProps {
  onRegisterComplete: (email: string) => void;
  onGoToLogin: () => void;
}

function RegisterScreen({ onRegisterComplete, onGoToLogin }: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email.trim() !== '') {
      onRegisterComplete(email);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        <View style={styles.loginContainer}>
          {/* Updated Logo */}
          <AppLogo />
          
          {/* App Name */}
          <Text style={styles.appName}>KyndKart</Text>
          
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
            <Text style={styles.loginButtonText}>Next</Text>
          </TouchableOpacity>
          
          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine} />
          </View>
          
          {/* Login Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Have an account? Log in here! </Text>
            <TouchableOpacity onPress={onGoToLogin}>
              <Text style={styles.registerLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

interface OTPVerificationScreenProps {
  email: string;
  onVerify: () => void;
  onResend: () => void;
}

function OTPVerificationScreen({ email, onVerify, onResend }: OTPVerificationScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [activeInput, setActiveInput] = useState(-1);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  
  // Handle OTP input change
  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    // Auto focus next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  // Handle key press to enable backspace navigation
  const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        <View style={styles.otpContainer}>
          {/* Updated Logo */}
          <AppLogo />
          
          {/* OTP Title */}
          <Text style={styles.otpTitle}>OTP Verification</Text>
          
          {/* OTP Instructions */}
          <Text style={styles.otpInstructions}>
            Enter 4 digit code sent to your{'\n'}
            E-mail risvini2001@gmail.com <Text style={styles.emailHighlight}>{email}</Text>
          </Text>
          
          {/* OTP Input Fields */}
          <View style={styles.otpInputContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.otpInput,
                  activeInput === index ? styles.otpInputActive : {}
                ]}
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                onFocus={() => setActiveInput(index)}
                onBlur={() => setActiveInput(-1)}
              />
            ))}
          </View>
          
          {/* Resend Code */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive a code? </Text>
            <TouchableOpacity onPress={onResend}>
              <Text style={styles.resendLink}>Resend.</Text>
            </TouchableOpacity>
          </View>
          
          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={onVerify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom curved background */}
        <View style={styles.bottomCurve} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Shop Register Screen
interface ShopRegisterScreenProps {
  onGoBack: () => void;
  onSubmit: () => void;
}

function ShopRegisterScreen({ onGoBack, onSubmit }: ShopRegisterScreenProps) {
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [operatingHours, setOperatingHours] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  // Function to handle location selection
  const handleLocationSelect = () => {
    // This would typically call a location picker API
    // For demonstration, just set a sample location
    setLocation('28 Main Street, City Name');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.registerFormContainer}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            
            {/* Form Title */}
            <Text style={styles.registerFormTitle}>Register</Text>
            
            {/* Business Name Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Business/Organization Name</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your Business/Organization Name"
                placeholderTextColor="#999"
                value={businessName}
                onChangeText={setBusinessName}
              />
            </View>
            
            {/* Phone Number Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Phone Number</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your Phone Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            
            {/* Location Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Location</Text>
              <TouchableOpacity 
                style={styles.locationInputContainer}
                onPress={handleLocationSelect}
              >
                <Text style={styles.locationIcon}>📍</Text>
                <TextInput
                  style={styles.locationInput}
                  placeholder="Your Location"
                  placeholderTextColor="#999"
                  value={location}
                  onChangeText={setLocation}
                />
              </TouchableOpacity>
            </View>
            
            {/* Business Type Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Business/Organization Type</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your Business/Organization Type"
                placeholderTextColor="#999"
                value={businessType}
                onChangeText={setBusinessType}
              />
            </View>
            
            {/* Operating Hours Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Operating Hours</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your Operating Hours"
                placeholderTextColor="#999"
                value={operatingHours}
                onChangeText={setOperatingHours}
              />
            </View>
            
            {/* Registration Number Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Registration Number</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your Registration Number"
                placeholderTextColor="#999"
                value={registrationNumber}
                onChangeText={setRegistrationNumber}
              />
            </View>
            
            {/* Submit Button */}
            <TouchableOpacity 
              style={styles.greenSubmitButton} 
              onPress={onSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// NGO Register Screen
interface NGORegisterScreenProps {
  onGoBack: () => void;
  onSubmit: () => void;
}

function NGORegisterScreen({ onGoBack, onSubmit }: NGORegisterScreenProps) {
  const [ngoName, setNGOName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [ngoType, setNGOType] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  // Function to handle location selection
  const handleLocationSelect = () => {
    // This would typically call a location picker API
    // For demonstration, just set a sample location
    setLocation('28 Main Street, City Name');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.registerFormContainer}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButtonSmall} onPress={onGoBack}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            
            {/* Form Title */}
            <Text style={styles.registerFormTitle}>Register</Text>
            
            {/* NGO Name Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>NGO/Organization Name</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your NGO/Organization Name"
                placeholderTextColor="#999"
                value={ngoName}
                onChangeText={setNGOName}
              />
            </View>
            
            {/* Phone Number Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Phone Number</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your Phone Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            
            {/* Location Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Location</Text>
              <TouchableOpacity 
                style={styles.locationInputContainer}
                onPress={handleLocationSelect}
              >
                <Text style={styles.locationIcon}>📍</Text>
                <TextInput
                  style={styles.locationInput}
                  placeholder="Your Location"
                  placeholderTextColor="#999"
                  value={location}
                  onChangeText={setLocation}
                />
              </TouchableOpacity>
            </View>
            
            {/* NGO Type Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>NGO/Organization Type</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your NGO/Organization Type"
                placeholderTextColor="#999"
                value={ngoType}
                onChangeText={setNGOType}
              />
            </View>
            
            {/* Registration Number Field */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Registration Number</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Your Registration Number"
                placeholderTextColor="#999"
                value={registrationNumber}
                onChangeText={setRegistrationNumber}
              />
            </View>
            
            {/* Submit Button */}
            <TouchableOpacity 
              style={styles.greenSubmitButton} 
              onPress={onSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Profile Screen
interface ProfileScreenProps {
  userName: string;
  userEmail: string;
  onGoToHome: () => void;
}

function ProfileScreen({ userName, userEmail, onGoToHome }: ProfileScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderCurve} />
          <Text style={styles.profileTitle}>Profile</Text>
          
          {/* User Profile Section */}
          <View style={styles.userProfileCard}>
            <View style={styles.userAvatarContainer}>
              <View style={styles.userAvatar} />
            </View>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userEmail}>{userEmail}</Text>
            
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileIcon}>✏️</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Profile Sections */}
        <ScrollView style={styles.profileSections}>
          {/* Personal Activity Section */}
          <Text style={styles.sectionTitle}>Personal Activity</Text>
          
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.iconContainer}>
              <View style={[styles.optionIcon, styles.historyIcon]} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Donation History</Text>
              <Text style={styles.optionDescription}>Track your contributions</Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          
          {/* Account Section */}
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.iconContainer}>
              <View style={[styles.optionIcon, styles.settingsIcon]} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Settings</Text>
              <Text style={styles.optionDescription}>Make changes to your account</Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.iconContainer}>
              <View style={[styles.optionIcon, styles.addressIcon]} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Change Address</Text>
              <Text style={styles.optionDescription}>Modify your addresses</Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.iconContainer}>
              <View style={[styles.optionIcon, styles.logoutIcon]} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Log Out</Text>
              <Text style={styles.optionDescription}>Manage your device security</Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          
          {/* More Section */}
          <Text style={styles.sectionTitle}>More</Text>
          
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.iconContainer}>
              <View style={[styles.optionIcon, styles.helpIcon]} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Help</Text>
              <Text style={styles.optionDescription}>Get assistance for any queries</Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.profileOption}>
            <View style={styles.iconContainer}>
              <View style={[styles.optionIcon, styles.aboutIcon]} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>About</Text>
              <Text style={styles.optionDescription}>Find out about the app</Text>
            </View>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5F0',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  homeContent: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingTop: 30,
  },
  topCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  bottomCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: '#E8F5F0',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    zIndex: -1,
  },
  logoContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logoBackground: {
    width: 80,
    height: 80,
    backgroundColor: '#006E29',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leafContainer: {
    width: 60,
    height: 30,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaf: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  leftLeaf: {
    left: 0,
    transform: [{ rotate: '-45deg' }],
  },
  rightLeaf: {
    right: 0,
    transform: [{ rotate: '45deg' }],
  } as ViewStyle,
  headerSection: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 20,
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    zIndex: 1,
    alignItems: 'center',
  },
  // Removed duplicate otpContainer definition
  registerFormTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  registerFormContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#E8F5F0',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 20,
    textAlign: 'center',
  },
  appNameLarge: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 10,
    textAlign: 'center',
  },
  loginGreeting: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  homeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  featuresGrid: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featureButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cartIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#006E29',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cartIcon: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cartHandle: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    top: -5,
    left: 15,
  },
  cartWheel1: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'absolute',
    bottom: -5,
    left: 5,
  },
  cartWheel2: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'absolute',
    bottom: -5,
    right: 5,
  },
  heartIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartShape: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    transform: [{ rotate: '45deg' }],
  },
  personIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personHead: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  personBody: {
    width: 20,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    bottom: -5,
  },
  gearIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FFC107',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gearOuter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: 'white',
  },
  gearInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  gearTooth1: {
    width: 4,
    height: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: -5,
    left: 13,
    transform: [{ rotate: '0deg' }],
  },
  gearTooth2: {
    width: 4,
    height: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: 13,
    left: -5,
    transform: [{ rotate: '90deg' }],
  },
  gearTooth3: {
    width: 4,
    height: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: 13,
    right: -5,
    transform: [{ rotate: '90deg' }],
  },
  gearTooth4: {
    width: 4,
    height: 15,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -5,
    left: 13,
    transform: [{ rotate: '0deg' }],
  },
  featureButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  newLogoutButton: {
    backgroundColor: '#006E29',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  newLogoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  otpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  otpInstructions: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  emailHighlight: {
    fontWeight: 'bold',
    color: '#006E29',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
  },
  otpInputActive: {
    borderColor: '#006E29',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    fontSize: 14,
    color: '#006E29',
    fontWeight: 'bold',
  },
  verifyButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#006E29',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  formGroup: {
    width: '100%',
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  formInput: {
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
  locationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  greenSubmitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#006E29',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButtonSmall: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: '#006E29',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#E8F5F0',
  },
  profileHeader: {
    height: 200,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeaderCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006E29',
    marginTop: 150,
  },
  userProfileCard: {
    width: '90%',
    height: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userAvatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#E8F5F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: '#006E29',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 100,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
  },
  editProfileButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  editProfileIcon: {
    fontSize: 20,
    color: '#006E29',
  },
  profileSections: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#006E29',
    borderRadius: 12,
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#006E29',
  },
  historyIcon: {
    backgroundColor: '#FFD700', // Example color, adjust as needed
  },
  settingsIcon: {
    backgroundColor: '#4A90E2', // Example color, adjust as needed
  },
  addressIcon: {
    backgroundColor: '#FF6347', // Example color, adjust as needed
  },
  logoutIcon: {
    backgroundColor: '#FF0000', // Example color, adjust as needed
  },
  helpIcon: {
    backgroundColor: '#FFD700', // Example color, adjust as needed
  },
  aboutIcon: {
    backgroundColor: '#8A2BE2', // Example color, adjust as needed
  },
  otpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});


// Removed incorrect useRef implementation. The correct useRef is already imported from React.
// Removed incorrect useRef implementation. The correct useRef is already imported from React.
