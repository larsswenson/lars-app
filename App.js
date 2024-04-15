import React from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from "react-native";
import LarsPic from "./assets/lars_pic.png";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lars Swenson's Profile</Text>
      </View>

      <Image
        source={ LarsPic } 
        style={styles.image}
        resizeMode="cover"
      />

      <ScrollView style={styles.scrollView}>
        <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Text style={styles.infoText}>Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Sit amet risus nullam eget felis eget nunc lobortis. Velit egestas dui id ornare arcu odio. Semper risus in hendrerit gravida rutrum. Nisl condimentum id venenatis a condimentum vitae. Quis auctor elit sed vulputate mi sit. Odio euismod lacinia at quis risus sed vulputate odio ut. In hendrerit gravida rutrum quisque. Orci porta non pulvinar neque laoreet suspendisse. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Amet commodo nulla facilisi nullam vehicula ipsum a. Consequat id porta nibh venenatis cras sed. Euismod in pellentesque massa placerat duis. Vestibulum lectus mauris ultrices eros. Eros in cursus turpis massa tincidunt dui. Vel eros donec ac odio tempor orci dapibus ultrices. Quis risus sed vulputate odio. Platea dictumst vestibulum rhoncus est pellentesque. A arcu cursus vitae congue mauris. Commodo sed egestas egestas fringilla phasellus faucibus.</Text>
        <Text style={styles.infoText}>Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet. Et sollicitudin ac orci phasellus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Massa vitae tortor condimentum lacinia quis vel eros. Adipiscing elit ut aliquam purus sit amet luctus. Non nisi est sit amet facilisis magna. Odio ut enim blandit volutpat maecenas. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Cras ornare arcu dui vivamus arcu. Integer malesuada nunc vel risus commodo. Vel pretium lectus quam id leo in vitae turpis massa. Turpis egestas pretium aenean pharetra magna. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Congue quisque egestas diam in arcu. Urna neque viverra justo nec. Ut lectus arcu bibendum at varius vel.</Text>
        <Text style={styles.infoText}>Pellentesque id nibh tortor id aliquet lectus. Diam vulputate ut pharetra sit amet aliquam. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. At ultrices mi tempus imperdiet nulla malesuada. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Ac tortor dignissim convallis aenean et tortor. Id semper risus in hendrerit gravida rutrum quisque non tellus. Magna fermentum iaculis eu non diam phasellus. Pretium fusce id velit ut tortor pretium viverra. Cursus in hac habitasse platea dictumst quisque sagittis. Egestas purus viverra accumsan in nisl nisi. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Mi proin sed libero enim sed faucibus turpis in. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Vitae suscipit tellus mauris a. Viverra tellus in hac habitasse platea dictumst. Ut enim blandit volutpat maecenas volutpat. Nunc faucibus a pellentesque sit. Turpis egestas sed tempus urna et pharetra pharetra.</Text>
        <Text style={styles.infoText}>Turpis in eu mi bibendum neque. Urna condimentum mattis pellentesque id nibh. Risus in hendrerit gravida rutrum quisque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. At augue eget arcu dictum varius duis at consectetur. Tristique senectus et netus et malesuada fames ac turpis. Et malesuada fames ac turpis egestas sed tempus urna. Risus at ultrices mi tempus imperdiet. In hendrerit gravida rutrum quisque. Neque gravida in fermentum et sollicitudin. Sit amet venenatis urna cursus. Amet massa vitae tortor condimentum lacinia. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Elit eget gravida cum sociis natoque penatibus. Porttitor leo a diam sollicitudin tempor id eu nisl. Morbi tristique senectus et netus. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.</Text>
      </ScrollView>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Please enter your name"
        />
        <TextInput
          style={styles.input}
          placeholder="Please enter your comment"
          multiline
        />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
  infoText: {
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
  },
});

export default ProfilePage;
