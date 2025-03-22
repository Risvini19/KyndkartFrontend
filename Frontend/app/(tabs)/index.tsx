import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

export default function KyndKartApp() {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login', 'register', 'otp', 'home', 'shopRegister'
  const [email, setEmail] = useState('');
  
  // Screen navigation handlers
  const handleLogin = () => setCurrentScreen('otp');
  const handleVerify = () => setCurrentScreen('home');
  const handleLogout = () => setCurrentScreen('login');
  const handleGoToRegister = () => setCurrentScreen('register');
  const handleGoToLogin = () => setCurrentScreen('login');
  const handleGoToShopRegister = () => setCurrentScreen('shopRegister');
  
  // Render the appropriate screen
  if (currentScreen === 'home') {
    return <HomeScreen onLogout={handleLogout} onShopRegister={handleGoToShopRegister} />;
  } else if (currentScreen === 'register') {
    return <RegisterScreen onRegisterComplete={(email: string) => {
      setEmail(email);
      setCurrentScreen('otp');
    }} onGoToLogin={handleGoToLogin} />;
  } else if (currentScreen === 'otp') {
    return <OTPVerificationScreen email={email} onVerify={handleVerify} onResend={() => {}} />;
  } else if (currentScreen === 'shopRegister') {
    return <ShopRegisterScreen onGoBack={() => setCurrentScreen('home')} onSubmit={() => setCurrentScreen('home')} />;
  } else {
    return <LoginScreen onLogin={(email) => {
      setEmail(email);
      handleLogin();
    }} onGoToRegister={handleGoToRegister} />;
  }
}

// Updated app logo component with circular emblem and leaf design
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
}

function HomeScreen({ onLogout, onShopRegister }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeContent}>
        {/* Top curved background */}
        <View style={styles.topCurve} />
        
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.welcomeText}>Welcome to KyndKart</Text>
        </View>
        
        {/* App Icon - Shopping bag with sprout */}
        <View style={styles.appIconContainer}>
          <View style={styles.appIcon}>
            <View style={styles.bagOutline}>
              <View style={styles.sproutStem} />
              <View style={styles.sproutLeftLeaf} />
              <View style={styles.sproutRightLeaf} />
            </View>
          </View>
        </View>
        
        {/* App Name */}
        <Text style={styles.appNameLarge}>KyndKart</Text>
        
        {/* Welcome Message */}
        <Text style={styles.loginGreeting}>Thank you for logging in!</Text>
        <Text style={styles.homeDescription}>
          This is your home screen. Here you can access all your KyndKart features.
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
            <TouchableOpacity style={styles.featureButton}>
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
            <TouchableOpacity style={styles.featureButton}>
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
          
          {/* Confirm Password Field - removed highlighting */}
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
            <Text style={styles.registerText}>Already have an account? </Text>
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
            E-mail <Text style={styles.emailHighlight}>{email}</Text>
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

// New Shop Register Screen
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
    setLocation('123 Main St, City Name');
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
            
            {/* Location Field - Updated for selection */}
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
            
            {/* Submit Button - Fixed styling */}
            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
              <Text style={styles.submitButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    backgroundColor: '#FFFFFF', // Changed from #E8F5F0 to white
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
  },
  // App Icon for Home Screen (Shopping Bag with Sprout)
  appIconContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  appIcon: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#006E29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bagOutline: {
    width: 60,
    height: 60,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  sproutStem: {
    width: 4,
    height: 20,
    backgroundColor: 'white',
    position: 'absolute',
    top: -10,
  },
  sproutLeftLeaf: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: -15,
    left: 10,
    transform: [{ rotate: '-30deg' }],
  },
  sproutRightLeaf: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: -15,
    right: 10,
    transform: [{ rotate: '30deg' }],
  },
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
  otpContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    zIndex: 1,
    alignItems: 'center',
  },
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 10,
    textAlign: 'center',
  },
  loginGreeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  homeDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  featuresGrid: {
    width: '100%',
    paddingHorizontal: 20,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featureButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  featureButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006E29',
  },
  // New Shopping Cart Icon
  cartIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cartIcon: {
    width: 28,
    height: 20,
    borderWidth: 2,
    borderColor: '#006E29',
    borderRadius: 3,
    position: 'absolute',
    bottom: 5,
  },
  cartHandle: {
    width: 12,
    height: 10,
    borderWidth: 2,
    borderColor: '#006E29',
    borderBottomWidth: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    top: 5,
    right: 9,
  },
  cartWheel1: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#006E29',
    position: 'absolute',
    bottom: 0,
    left: 8,
  },
  cartWheel2: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#006E29',
    position: 'absolute',
    bottom: 0,
    right: 8,
  },
  // New Heart Icon
  heartIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartShape: {
    width: 24,
    height: 24,
    backgroundColor: '#006E29',
    transform: [{ rotate: '45deg' }],
    position: 'relative',
  },
  // New Person Icon
  personIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  personHead: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#006E29',
    position: 'absolute',
    top: 0,
  },
  personBody: {
    width: 24,
    height: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#006E29',
    position: 'absolute',
    bottom: 0,
  },
  // New Gear Icon
  gearIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gearOuter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#006E29',
  },
  gearInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#006E29',
    position: 'absolute',
  },
  gearTooth1: {
    width: 8,
    height: 8,
    backgroundColor: '#006E29',
    position: 'absolute',
    top: -4,
  },
  gearTooth2: {
    width: 8,
    height: 8,
    backgroundColor: '#006E29',
    position: 'absolute',
    bottom: -4,
  },
  gearTooth3: {
    width: 8,
    height: 8,
    backgroundColor: '#006E29',
    position: 'absolute',
    left: -4,
  },
  gearTooth4: {
    width: 8,
    height: 8,
    backgroundColor: '#006E29',
    position: 'absolute',
    right: -4,
  },
  newLogoutButton: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#006E29',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  newLogoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
    width: '100%',
  },
  forgotPassword: {
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#006E29',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#006E29',
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#666',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#333',
  },
  registerLink: {
    fontSize: 16,
    color: '#006E29',
    fontWeight: 'bold',
  },
  otpTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006E29',
    marginBottom: 10,
  },
  otpInstructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  emailHighlight: {
    fontWeight: 'bold',
    color: '#006E29',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  locationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#F8F8F8',
  },
  otpInputActive: {
    borderColor: '#006E29',
    borderWidth: 2,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: '#333',
  },
  resendLink: {
    fontSize: 16,
    color: '#006E29',
    fontWeight: 'bold',
  },
  verifyButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#006E29',
    borderRadius: 10,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 5,
    backgroundColor: '#006E29',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    width: '100%',
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#006E29',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  backButtonText: {
    fontSize: 18,
    color: '#006E29',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 15,
    width: '100%',
  },
  formInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
    width: '100%',
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  locationInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  locationIcon: {
    fontSize: 24,
    marginRight: 10,
  },
});