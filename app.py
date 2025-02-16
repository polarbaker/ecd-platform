import streamlit as st
import pandas as pd
from datetime import datetime
import plotly.express as px
from PIL import Image
import os

# Configure the Streamlit page
st.set_page_config(
    page_title="ECD Platform",
    page_icon="👶",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        @import url('static/css/styles.css');
        
        /* Additional Streamlit-specific styles */
        .stApp {
            background-color: #f5f5f5;
        }
        
        .st-emotion-cache-1y4p8pa {
            max-width: 100rem;
        }
        
        .st-bw {
            background-color: transparent;
        }
        
        .stButton>button {
            background-color: #1a1a1a;
            color: white;
            border-radius: 0;
            padding: 0.75rem 2rem;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            border: none;
            transition: background-color 0.3s ease;
        }
        
        .stButton>button:hover {
            background-color: #4d4d4d;
            border: none;
        }
        
        .stTextInput>div>div>input {
            background-color: transparent;
            border: 1px solid #4d4d4d;
            border-radius: 0;
            padding: 1rem;
            font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3 {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            letter-spacing: -0.02em;
        }
        
        .stProgress > div > div > div > div {
            background-color: #1a1a1a;
        }
    </style>
""", unsafe_allow_html=True)

# Initialize session state
if 'authenticated' not in st.session_state:
    st.session_state.authenticated = False
if 'user_role' not in st.session_state:
    st.session_state.user_role = None

def login_page():
    st.markdown("<div class='hero'>", unsafe_allow_html=True)
    st.title("Welcome to the Future of Early Childhood Development")
    st.markdown("</div>", unsafe_allow_html=True)
    
    col1, col2, col3 = st.columns([1,2,1])
    with col2:
        with st.form("login_form"):
            st.markdown("##### Sign In")
            username = st.text_input("Username")
            password = st.text_input("Password", type="password")
            submitted = st.form_submit_button("Enter Platform")
            
            if submitted:
                if username == "admin" and password == "demo123":
                    st.session_state.authenticated = True
                    st.session_state.user_role = "Admin"
                    st.rerun()
                elif username and password:
                    st.error("Invalid credentials. For demo, use admin/demo123")

def main_navigation():
    menu_options = {
        "Teacher": ["Overview", "Lesson Planning", "Student Progress", "Training"],
        "Admin": ["Overview", "Teacher Management", "Analytics", "Donor Management"],
        "Parent": ["Child Progress", "Resources", "Communications"],
        "Donor": ["Impact Dashboard", "Donation History", "Project Updates"]
    }
    
    role = st.session_state.user_role
    if role in menu_options:
        selected = st.sidebar.selectbox("", menu_options[role])
        return selected
    return None

def overview_dashboard():
    st.title("Platform Overview")
    
    # Key Metrics
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown("""
            <div class='card'>
                <h3>Students Present</h3>
                <h2>15/18</h2>
                <div class='progress-bar'></div>
                <p>83% Attendance Rate</p>
            </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
            <div class='card'>
                <h3>Active Programs</h3>
                <h2>12</h2>
                <div class='progress-bar'></div>
                <p>4 New This Month</p>
            </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
            <div class='card'>
                <h3>Teacher Engagement</h3>
                <h2>94%</h2>
                <div class='progress-bar'></div>
                <p>+5% from Last Month</p>
            </div>
        """, unsafe_allow_html=True)
    
    # Activity Timeline
    st.markdown("### Recent Activity")
    activities = [
        "New student enrollment: Sarah Johnson",
        "Lesson plan submitted: Early Mathematics",
        "Parent meeting scheduled: Tomorrow, 2 PM",
        "Development milestone reached: Language Skills"
    ]
    
    for activity in activities:
        st.markdown(f"- {activity}")

def lesson_planning():
    st.title("Lesson Planning")
    
    with st.form("new_lesson", clear_on_submit=True):
        st.markdown("##### Create New Lesson")
        
        col1, col2 = st.columns(2)
        with col1:
            lesson_title = st.text_input("Lesson Title")
            lesson_date = st.date_input("Lesson Date")
        
        with col2:
            lesson_duration = st.number_input("Duration (minutes)", min_value=15, max_value=180, step=15)
            lesson_type = st.selectbox("Lesson Type", ["Individual", "Group", "Workshop"])
        
        lesson_objective = st.text_area("Learning Objectives")
        materials = st.text_area("Required Materials")
        
        col3, col4 = st.columns(2)
        with col3:
            st.markdown("##### Additional Resources")
            st.file_uploader("Upload Materials", accept_multiple_files=True)
        
        with col4:
            st.markdown("##### Schedule")
            st.time_input("Start Time")
        
        submitted = st.form_submit_button("Save Lesson")
        if submitted:
            st.success("Lesson saved successfully!")

def student_progress():
    st.title("Student Progress Tracking")
    
    col1, col2 = st.columns([1, 2])
    
    with col1:
        student = st.selectbox("Select Student", ["Alice Smith", "Bob Johnson", "Carol Williams"])
        st.image("https://placehold.co/200x200", caption=student)
    
    with col2:
        st.markdown("##### Development Milestones")
        milestones = {
            "Social Skills": 85,
            "Language Development": 75,
            "Motor Skills": 90,
            "Cognitive Development": 80
        }
        
        for area, progress in milestones.items():
            st.markdown(f"###### {area}")
            st.progress(progress/100)
    
    st.markdown("##### Recent Activities")
    st.markdown("""
        <div class='grid'>
            <div class='card'>
                <h4>Alphabet Recognition</h4>
                <p>Completed successfully</p>
                <div class='progress-bar'></div>
            </div>
            <div class='card'>
                <h4>Group Sharing</h4>
                <p>Active participation</p>
                <div class='progress-bar'></div>
            </div>
            <div class='card'>
                <h4>Number Counting</h4>
                <p>In progress</p>
                <div class='progress-bar'></div>
            </div>
        </div>
    """, unsafe_allow_html=True)

def main():
    if not st.session_state.authenticated:
        login_page()
    else:
        page = main_navigation()
        
        if page == "Overview":
            overview_dashboard()
        elif page == "Lesson Planning":
            lesson_planning()
        elif page == "Student Progress":
            student_progress()
        elif page == "Training":
            st.title("Teacher Training")
            st.info("Training modules coming soon!")

if __name__ == "__main__":
    main()
