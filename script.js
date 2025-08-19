// Update time display
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    
    const timeElement = document.querySelector('.time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Dock item click handlers
document.addEventListener('DOMContentLoaded', function() {
    const dockItems = document.querySelectorAll('.dock-item');
    
    dockItems.forEach(item => {
        item.addEventListener('click', function() {
            const appName = this.getAttribute('data-app');
            console.log(`Clicked on ${appName}`);
            
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // App-specific functionality
            if (appName === 'musicly') {
                // Open TikTok search for "epic face" in new tab
                window.open('https://www.tiktok.com/search?q=epic%20face&t=1755554005908', '_blank');
            } else if (appName === 'twitter') {
                // Open Epic Face X profile in new tab
                window.open('https://x.com/epicfacedotfun', '_blank');
            } else if (appName === 'jupiter') {
                // Open Jupiter Plugin Trading modal
                const jupiterModal = document.getElementById('jupiter-modal');
                if (jupiterModal) {
                    jupiterModal.style.display = 'block';
                    // Initialize Jupiter Plugin
                    initJupiterPlugin();
                }
            } else if (appName === 'soundcloud') {
                // Open SoundCloud modal
                const soundcloudModal = document.getElementById('soundcloud-modal');
                if (soundcloudModal) {
                    soundcloudModal.style.display = 'block';
                }
            } else if (appName === 'trash') {
                // Open Trash modal
                openTrashModal();
            } else if (appName === 'smile') {
                // Open Epic Smiles Gallery modal
                const epicSmilesModal = document.getElementById('epic-smiles-modal');
                if (epicSmilesModal) {
                    epicSmilesModal.style.display = 'block';
                }
            } else if (appName === 'firefox') {
                // Open Find the Epic Faces Wiki
                window.open('https://find-the-epic-faces-official.fandom.com/wiki/Find_the_Epic_Faces_Wiki', '_blank');
            }
            // TODO: Add other app-specific functionality here
        });
    });
    
    // Apple logo click handler
    const appleLogo = document.querySelector('.apple-logo');
    if (appleLogo) {
        appleLogo.addEventListener('click', function() {
            console.log('Apple logo clicked');
            // TODO: Add Apple menu functionality
        });
    }
    
    // Jupiter modal close handler
    const jupiterClose = document.getElementById('jupiter-close');
    if (jupiterClose) {
        jupiterClose.addEventListener('click', function() {
            const jupiterModal = document.getElementById('jupiter-modal');
            if (jupiterModal) {
                jupiterModal.style.display = 'none';
            }
        });
    }
    
    // Jupiter modal minimize handler
    const jupiterMinimize = document.querySelector('.jupiter-minimize');
    if (jupiterMinimize) {
        jupiterMinimize.addEventListener('click', function() {
            const jupiterModal = document.getElementById('jupiter-modal');
            if (jupiterModal) {
                jupiterModal.style.display = 'none';
            }
        });
    }
    
    // Jupiter modal maximize handler
    const jupiterMaximize = document.querySelector('.jupiter-maximize');
    if (jupiterMaximize) {
        jupiterMaximize.addEventListener('click', function() {
            const jupiterModal = document.getElementById('jupiter-modal');
            if (jupiterModal) {
                jupiterModal.classList.toggle('jupiter-maximized');
            }
        });
    }
    
    // Close Jupiter modal when clicking outside
    const jupiterModal = document.getElementById('jupiter-modal');
    if (jupiterModal) {
        jupiterModal.addEventListener('click', function(e) {
            if (e.target === jupiterModal) {
                jupiterModal.style.display = 'none';
            }
        });
    }
    
    // Make Jupiter modal draggable
    makeJupiterDraggable();
    
    // SoundCloud modal close handler
    const soundcloudClose = document.getElementById('soundcloud-close');
    if (soundcloudClose) {
        soundcloudClose.addEventListener('click', function() {
            const soundcloudModal = document.getElementById('soundcloud-modal');
            if (soundcloudModal) {
                soundcloudModal.style.display = 'none';
            }
        });
    }
    
    // SoundCloud modal minimize handler
    const soundcloudMinimize = document.querySelector('.soundcloud-minimize');
    if (soundcloudMinimize) {
        soundcloudMinimize.addEventListener('click', function() {
            const soundcloudModal = document.getElementById('soundcloud-modal');
            if (soundcloudModal) {
                soundcloudModal.style.display = 'none';
            }
        });
    }
    
    // SoundCloud modal maximize handler
    const soundcloudMaximize = document.querySelector('.soundcloud-maximize');
    if (soundcloudMaximize) {
        soundcloudMaximize.addEventListener('click', function() {
            const soundcloudModal = document.getElementById('soundcloud-modal');
            if (soundcloudModal) {
                soundcloudModal.classList.toggle('soundcloud-maximized');
            }
        });
    }
    
    // Close SoundCloud modal when clicking outside
    const soundcloudModal = document.getElementById('soundcloud-modal');
    if (soundcloudModal) {
        soundcloudModal.addEventListener('click', function(e) {
            if (e.target === soundcloudModal) {
                soundcloudModal.style.display = 'none';
            }
        });
    }
    
    // Make SoundCloud modal draggable
    makeSoundcloudDraggable();
    
    // Epic Smiles modal close handler
    const epicSmilesClose = document.getElementById('epic-smiles-close');
    if (epicSmilesClose) {
        epicSmilesClose.addEventListener('click', function() {
            const epicSmilesModal = document.getElementById('epic-smiles-modal');
            if (epicSmilesModal) {
                epicSmilesModal.style.display = 'none';
            }
        });
    }
    
    // Epic Smiles modal minimize handler
    const epicSmilesMinimize = document.querySelector('.epic-smiles-minimize');
    if (epicSmilesMinimize) {
        epicSmilesMinimize.addEventListener('click', function() {
            const epicSmilesModal = document.getElementById('epic-smiles-modal');
            if (epicSmilesModal) {
                epicSmilesModal.style.display = 'none';
            }
        });
    }
    
    // Epic Smiles modal maximize handler
    const epicSmilesMaximize = document.querySelector('.epic-smiles-maximize');
    if (epicSmilesMaximize) {
        epicSmilesMaximize.addEventListener('click', function() {
            const epicSmilesModal = document.getElementById('epic-smiles-modal');
            if (epicSmilesModal) {
                epicSmilesModal.classList.toggle('epic-smiles-maximized');
            }
        });
    }
    
    // Close Epic Smiles modal when clicking outside
    const epicSmilesModal = document.getElementById('epic-smiles-modal');
    if (epicSmilesModal) {
        epicSmilesModal.addEventListener('click', function(e) {
            if (e.target === epicSmilesModal) {
                epicSmilesModal.style.display = 'none';
            }
        });
    }
    
    // Image viewer modal close handler
    const imageViewerClose = document.getElementById('image-viewer-close');
    if (imageViewerClose) {
        imageViewerClose.addEventListener('click', function() {
            const imageViewerModal = document.getElementById('image-viewer-modal');
            if (imageViewerModal) {
                imageViewerModal.style.display = 'none';
            }
        });
    }
    
    // Close image viewer when clicking outside
    const imageViewerModal = document.getElementById('image-viewer-modal');
    if (imageViewerModal) {
        imageViewerModal.addEventListener('click', function(e) {
            if (e.target === imageViewerModal) {
                imageViewerModal.style.display = 'none';
            }
        });
    }
    
    // Make Epic Smiles modal draggable
    makeEpicSmilesDraggable();
    
    // Trash modal event handlers
    console.log('Setting up trash modal event handlers...');
    
    const trashClose = document.getElementById('trash-close');
    if (trashClose) {
        trashClose.addEventListener('click', function() {
            const trashModal = document.getElementById('trash-modal');
            if (trashModal) {
                trashModal.style.display = 'none';
                console.log('Trash modal closed via close button');
            }
        });
        console.log('Trash close button handler added');
    } else {
        console.error('Trash close button not found');
    }
    
    // Trash modal minimize handler
    const trashMinimize = document.querySelector('.trash-minimize');
    if (trashMinimize) {
        trashMinimize.addEventListener('click', function() {
            const trashModal = document.getElementById('trash-modal');
            if (trashModal) {
                trashModal.style.display = 'none';
                console.log('Trash modal minimized');
            }
        });
        console.log('Trash minimize button handler added');
    } else {
        console.error('Trash minimize button not found');
    }
    
    // Trash modal maximize handler
    const trashMaximize = document.querySelector('.trash-maximize');
    if (trashMaximize) {
        trashMaximize.addEventListener('click', function() {
            const trashModal = document.getElementById('trash-modal');
            if (trashModal) {
                trashModal.classList.toggle('trash-maximized');
                console.log('Trash modal toggled maximize');
            }
        });
        console.log('Trash maximize button handler added');
    } else {
        console.error('Trash maximize button not found');
    }
    
    // Close trash modal when clicking outside
    const trashModal = document.getElementById('trash-modal');
    if (trashModal) {
        trashModal.addEventListener('click', function(e) {
            if (e.target === trashModal) {
                trashModal.style.display = 'none';
                console.log('Trash modal closed via outside click');
            }
        });
        console.log('Trash modal outside click handler added');
    } else {
        console.error('Trash modal element not found during setup');
    }
    
    // Make trash modal draggable
    try {
        makeTrashDraggable();
        console.log('Trash modal draggable setup complete');
    } catch (error) {
        console.error('Error setting up trash modal draggable:', error);
    }
    
    // Pony gallery modal event handlers
    console.log('Setting up pony gallery modal event handlers...');
    
    const ponyGalleryModal = document.getElementById('pony-gallery-modal');
    if (ponyGalleryModal) {
        // Close pony gallery when clicking outside
        ponyGalleryModal.addEventListener('click', function(e) {
            if (e.target === ponyGalleryModal) {
                ponyGalleryModal.style.display = 'none';
                console.log('Pony gallery modal closed via outside click');
            }
        });
        console.log('Pony gallery modal outside click handler added');
    } else {
        console.error('Pony gallery modal element not found during setup');
    }
});

// Toggle SoundCloud Player Overlay
function toggleSoundcloudPlayer() {
    const overlay = document.querySelector('.soundcloud-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        // After overlay fades out, remove it completely
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}

// Open Image Modal
function openImageModal(imageSrc) {
    const fullSizeImage = document.getElementById('full-size-image');
    const imageViewerModal = document.getElementById('image-viewer-modal');
    
    if (fullSizeImage && imageViewerModal) {
        fullSizeImage.src = imageSrc;
        imageViewerModal.style.display = 'block';
    }
}

// Make Epic Smiles Modal Draggable
function makeEpicSmilesDraggable() {
    const modal = document.getElementById('epic-smiles-modal');
    const dragHandle = document.getElementById('epic-smiles-drag-handle');
    
    if (!modal || !dragHandle) return;
    
    let isDragging = false;
    let startX, startY, startLeft, startTop;
    
    dragHandle.addEventListener('mousedown', function(e) {
        // Don't start dragging if clicking on control buttons
        if (e.target.closest('.epic-smiles-control')) {
            return;
        }
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Get current position
        const rect = modal.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        
        // Add dragging class for visual feedback
        modal.classList.add('epic-smiles-dragging');
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        const newLeft = startLeft + deltaX;
        const newTop = startTop + deltaY;
        
        // Update modal position
        modal.style.left = newLeft + 'px';
        modal.style.top = newTop + 'px';
        modal.style.transform = 'none'; // Remove default transform
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            modal.classList.remove('epic-smiles-dragging');
        }
    });
    
    // Prevent text selection while dragging
    dragHandle.addEventListener('selectstart', function(e) {
        if (isDragging) {
            e.preventDefault();
        }
    });
}

// Jupiter Plugin Initialization
function initJupiterPlugin() {
    // Check if Jupiter Plugin is already initialized
    if (window.jupiterPlugin) {
        return;
    }
    
    try {
        // Initialize Jupiter Plugin v1 with correct syntax
        window.jupiterPlugin = window.Jupiter.init({
            displayMode: "integrated",
            integratedTargetId: "jupiter-plugin",
            formProps: {
                initialInputMint: "6hZsdLMZn2Wi7NHWsdyeMM8jigapScA7GaVqjRhgpump", // EPIC token
                fixedMint: "So11111111111111111111111111111111111111112", // SOL
            },
        });
        
    } catch (error) {
        console.error('Failed to initialize Jupiter Plugin:', error);
        // Fallback: show error message or redirect to Jupiter
        const container = document.getElementById('jupiter-plugin');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #fff;">
                    <h3>Jupiter Plugin Loading...</h3>
                    <p>If this takes too long, <a href="https://jup.ag" target="_blank" style="color: #4ecdc4;">click here to trade on Jupiter</a></p>
                </div>
            `;
        }
    }
}

// Make Jupiter Modal Draggable
function makeJupiterDraggable() {
    const modal = document.getElementById('jupiter-modal');
    const dragHandle = document.getElementById('jupiter-drag-handle');
    
    if (!modal || !dragHandle) return;
    
    let isDragging = false;
    let startX, startY, startLeft, startTop;
    
    dragHandle.addEventListener('mousedown', function(e) {
        // Don't start dragging if clicking on control buttons
        if (e.target.closest('.jupiter-control')) {
            return;
        }
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Get current position
        const rect = modal.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        
        // Add dragging class for visual feedback
        modal.classList.add('jupiter-dragging');
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        const newLeft = startLeft + deltaX;
        const newTop = startTop + deltaY;
        
        // Update modal position
        modal.style.left = newLeft + 'px';
        modal.style.top = newTop + 'px';
        modal.style.transform = 'none'; // Remove default transform
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            modal.classList.remove('jupiter-dragging');
        }
    });
    
    // Prevent text selection while dragging
    dragHandle.addEventListener('selectstart', function(e) {
        if (isDragging) {
            e.preventDefault();
        }
    });
}

    // Make Trash Modal Draggable
    function makeTrashDraggable() {
        console.log('Setting up trash modal draggable...');
        
        const modal = document.getElementById('trash-modal');
        const dragHandle = document.getElementById('trash-drag-handle');
        
        if (!modal) {
            console.error('Trash modal not found for draggable setup');
            return;
        }
        
        if (!dragHandle) {
            console.error('Trash drag handle not found for draggable setup');
            return;
        }
        
        console.log('Trash modal and drag handle found, setting up events...');
        
        let isDragging = false;
        let startX, startY, startLeft, startTop;
        
        dragHandle.addEventListener('mousedown', function(e) {
            // Don't start dragging if clicking on control buttons
            if (e.target.closest('.trash-control')) {
                return;
            }
            
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            
            // Get current position
            const rect = modal.getBoundingClientRect();
            startLeft = rect.left;
            startTop = rect.top;
            
            // Add dragging class for visual feedback
            modal.classList.add('trash-dragging');
            
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            const newLeft = startLeft + deltaX;
            const newTop = startTop + deltaY;
            
            // Update modal position
            modal.style.left = newLeft + 'px';
            modal.style.top = newTop + 'px';
            modal.style.transform = 'none'; // Remove default transform
        });
        
        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                modal.classList.remove('trash-dragging');
            }
        });
        
        // Prevent text selection while dragging
        dragHandle.addEventListener('selectstart', function(e) {
            if (isDragging) {
                e.preventDefault();
            }
        });
    }
    
    // Make SoundCloud Modal Draggable
    function makeSoundcloudDraggable() {
    const modal = document.getElementById('soundcloud-modal');
    const dragHandle = document.getElementById('soundcloud-drag-handle');
    
    if (!modal || !dragHandle) return;
    
    let isDragging = false;
    let startX, startY, startLeft, startTop;
    
    dragHandle.addEventListener('mousedown', function(e) {
        // Don't start dragging if clicking on control buttons
        if (e.target.closest('.soundcloud-control')) {
            return;
        }
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Get current position
        const rect = modal.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        
        // Add dragging class for visual feedback
        modal.classList.add('soundcloud-dragging');
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        const newLeft = startLeft + deltaX;
        const newTop = startTop + deltaY;
        
        // Update modal position
        modal.style.left = newLeft + 'px';
        modal.style.top = newTop + 'px';
        modal.style.transform = 'none'; // Remove default transform
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            modal.classList.remove('soundcloud-dragging');
        }
    });
    
    // Prevent text selection while dragging
    dragHandle.addEventListener('selectstart', function(e) {
        if (isDragging) {
            e.preventDefault();
        }
    });
}

    // 3D Model Loading and Rendering
let scene, camera, renderer, model;

function init3D() {
    console.log('Initializing 3D scene...');
    
    // First, let's test if Three.js is working at all
    if (typeof THREE === 'undefined') {
        console.error('Three.js not loaded!');
        return;
    }
    
    console.log('Three.js version:', THREE.REVISION);
    
    const container = document.getElementById('3d-container');
    
    if (!container) {
        console.error('3D container not found!');
        return;
    }
    
    try {
        // Create scene
        scene = new THREE.Scene();
        scene.background = null; // Transparent background
        
        // Create camera
        camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
        camera.position.z = 5;
        
        // Create renderer
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(300, 300);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        console.log('3D renderer created and added to container');
        
        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        scene.add(directionalLight);
        
        // Load the actual 3D model from epic-face folder
        console.log('Loading epic.obj model...');
        
        // Check if OBJLoader is available
        if (typeof THREE.OBJLoader !== 'undefined') {
            console.log('OBJLoader available, loading epic.obj...');
            
            // Load the texture first
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(
                'assets/epic-face/textures/epic_face_-_Copy.png',
                function(texture) {
                    console.log('Texture loaded successfully!');
                    
                    // Now load the OBJ model with the texture
                    const loader = new THREE.OBJLoader();
                    loader.load(
                        'assets/epic-face/source/epic.obj',
                        function(object) {
                            console.log('3D model loaded successfully!');
                            model = object;
                            
                            // Apply the texture to all materials in the model
                            object.traverse(function(child) {
                                if (child.isMesh) {
                                    child.material.map = texture;
                                    child.material.needsUpdate = true;
                                }
                            });
                            
                            // Center the model
                            const box = new THREE.Box3().setFromObject(model);
                            const center = box.getCenter(new THREE.Vector3());
                            model.position.sub(center);
                            
                            // Scale the model to fit nicely
                            const size = box.getSize(new THREE.Vector3());
                            const maxDim = Math.max(size.x, size.y, size.z);
                            const scale = 4 / maxDim; // Increased from 2 to 4 for bigger size
                            model.scale.setScalar(scale);
                            
                            scene.add(model);
                            console.log('Epic model with texture added to scene');
                        },
                        function(xhr) {
                            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                        },
                        function(error) {
                            console.error('Error loading 3D model:', error);
                                                // Fallback: create a simple spinning cube
                    const geometry = new THREE.BoxGeometry(4, 4, 4);
                    const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
                    model = new THREE.Mesh(geometry, material);
                    scene.add(model);
                    console.log('Added fallback cube due to loading error');
                        }
                    );
                },
                function(xhr) {
                    console.log('Texture loading progress:', (xhr.loaded / xhr.total * 100) + '%');
                },
                function(error) {
                    console.error('Error loading texture:', error);
                    // Load model without texture
                    const loader = new THREE.OBJLoader();
                    loader.load(
                        'assets/epic-face/source/epic.obj',
                        function(object) {
                            console.log('3D model loaded without texture');
                            model = object;
                            
                            // Center and scale the model
                            const box = new THREE.Box3().setFromObject(model);
                            const center = box.getCenter(new THREE.Vector3());
                            model.position.sub(center);
                            
                            const size = box.getSize(new THREE.Vector3());
                            const maxDim = Math.max(size.x, size.y, size.z);
                            const scale = 4 / maxDim; // Increased from 2 to 4 for bigger size
                            model.scale.setScalar(scale);
                            
                            scene.add(model);
                        }
                    );
                }
            );
        } else {
            console.error('OBJLoader not available, using fallback cube');
            // Fallback: create a simple spinning cube
            const geometry = new THREE.BoxGeometry(4, 4, 4);
            const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
            model = new THREE.Mesh(geometry, material);
            scene.add(model);
            console.log('Added fallback cube');
        }
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            if (model) {
                model.rotation.y += 0.03; // Faster rotation
            }
            
            renderer.render(scene, camera);
        }
        
        animate();
        console.log('Animation loop started');
        
    } catch (error) {
        console.error('Error in 3D initialization:', error);
    }
}



// Add some desktop interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up desktop interactivity...');
    
    const desktop = document.querySelector('.desktop');
    
    // Check if trash modal exists
    const trashModal = document.getElementById('trash-modal');
    if (trashModal) {
        console.log('Trash modal HTML found:', trashModal);
    } else {
        console.error('Trash modal HTML not found!');
    }
    
    // Initialize 3D scene
    init3D();
    
    // Right-click context menu prevention (optional)
    desktop.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Folder click handlers
    const folders = document.querySelectorAll('.folder');
    folders.forEach(folder => {
        folder.addEventListener('click', function() {
            const folderName = this.getAttribute('data-folder');
            console.log(`Clicked on ${folderName} folder`);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Folder-specific functionality
            if (folderName === 'smile') {
                // Open Epic Smiles Gallery modal
                const epicSmilesModal = document.getElementById('epic-smiles-modal');
                if (epicSmilesModal) {
                    epicSmilesModal.style.display = 'block';
                }
            } else if (folderName === 'pony') {
                // TODO: Add pony folder functionality
                console.log('Pony folder clicked - functionality not implemented yet');
            }
        });
    });
    
    // RetroTunes button click handler
    const retrotunesButton = document.getElementById('retrotunes-button');
    if (retrotunesButton) {
        retrotunesButton.addEventListener('click', function() {
            console.log('RetroTunes button clicked');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Open RetroTunes modal
            openRetroTunes();
        });
    }
    
    // RetroTunes modal close handler
    const retrotunesClose = document.getElementById('retrotunes-close');
    if (retrotunesClose) {
        retrotunesClose.addEventListener('click', function() {
            closeRetroTunes();
        });
    }
    
    // Close modal when clicking outside
    const retrotunesModal = document.getElementById('retrotunes-modal');
    if (retrotunesModal) {
        retrotunesModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeRetroTunes();
            }
        });
    }
});

// RetroTunes functionality
function openRetroTunes() {
    const modal = document.getElementById('retrotunes-modal');
    const container = document.getElementById('retrotunes-container');
    
    if (modal && container) {
        modal.style.display = 'block';
        
        // Render RetroTunes React component
        renderRetroTunes(container);
        
        // Initialize drag functionality
        initDragToMove(modal);
    }
}

function closeRetroTunes() {
    const modal = document.getElementById('retrotunes-modal');
    if (modal) {
        modal.style.display = 'none';
        
        // Clean up React component
        const container = document.getElementById('retrotunes-container');
        if (container) {
            container.innerHTML = '';
        }
    }
}

function renderRetroTunes(container) {
    try {
        // Create the RetroTunes component using vanilla JavaScript
        const RetroTunes = createRetroTunesComponent();
        if (RetroTunes && typeof RetroTunes.render === 'function') {
            RetroTunes.render();
        } else {
            container.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">Loading RetroTunes...</div>';
        }
    } catch (error) {
        console.error('Error rendering RetroTunes:', error);
        container.innerHTML = '<div style="padding: 20px; text-align: center; color: #ff0000;">Error loading RetroTunes</div>';
    }
}

function createRetroTunesComponent() {
    // Load the full RetroTunes component
    if (typeof createFullRetroTunesComponent === 'function') {
        return createFullRetroTunesComponent();
    } else {
        // Fallback if the component isn't loaded
        return {
            render: function() {
                const container = document.getElementById('retrotunes-container');
                if (container) {
                    container.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">Loading RetroTunes...</div>';
                }
            },
            destroy: function() {}
        };
    }
}

// Drag to move functionality
function initDragToMove(modal) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    function dragStart(e) {
        if (e.target.closest('.mac-light.red') || e.target.closest('.retrotunes-close')) {
            return; // Don't start drag if clicking close buttons
        }
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === modal || e.target.closest('.retrotunes-modal-content')) {
            isDragging = true;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, modal);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }

    // Add event listeners
    modal.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    // Touch events for mobile
    modal.addEventListener('touchstart', function(e) {
        const touch = e.touches[0];
        dragStart({ clientX: touch.clientX, clientY: touch.clientY, target: e.target });
    });
    
    document.addEventListener('touchmove', function(e) {
        if (isDragging) {
            e.preventDefault();
            const touch = e.touches[0];
            drag({ clientX: touch.clientX, clientY: touch.clientY, preventDefault: () => {} });
        }
    });
    
    document.addEventListener('touchend', dragEnd);
}



// Function to open trash modal
function openTrashModal() {
    const trashModal = document.getElementById('trash-modal');
    if (trashModal) {
        trashModal.style.display = 'block';
        console.log('Trash modal opened successfully');
    } else {
        console.error('Trash modal element not found');
    }
}

// Function to open pony folder from trash
function openPonyFolder() {
    console.log('DO NOT OPEN! folder clicked from trash...');
    
    // Close trash modal
    const trashModal = document.getElementById('trash-modal');
    if (trashModal) {
        trashModal.style.display = 'none';
        console.log('Trash modal closed');
    }
    
    // Open the pony gallery modal
    const ponyGalleryModal = document.getElementById('pony-gallery-modal');
    if (ponyGalleryModal) {
        ponyGalleryModal.style.display = 'flex';
        console.log('Pony gallery opened');
    } else {
        console.error('Pony gallery modal not found');
    }
}

// Function to close pony gallery
function closePonyGallery() {
    const ponyGalleryModal = document.getElementById('pony-gallery-modal');
    if (ponyGalleryModal) {
        ponyGalleryModal.style.display = 'none';
        console.log('Pony gallery closed');
    }
}

// Function to minimize pony gallery
function minimizePonyGallery() {
    const ponyGalleryModal = document.getElementById('pony-gallery-modal');
    if (ponyGalleryModal) {
        ponyGalleryModal.style.display = 'none';
        console.log('Pony gallery minimized');
    }
}

// Function to maximize pony gallery
function maximizePonyGallery() {
    const ponyGalleryModal = document.getElementById('pony-gallery-modal');
    if (ponyGalleryModal) {
        ponyGalleryModal.classList.toggle('epic-smiles-maximized');
        console.log('Pony gallery maximize toggled');
    }
}

// Function to make pony gallery draggable
function makePonyGalleryDraggable() {
    const modal = document.getElementById('pony-gallery-modal');
    const dragHandle = document.getElementById('pony-gallery-drag-handle');
    
    if (!modal || !dragHandle) return;
    
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    dragHandle.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === dragHandle) {
            isDragging = true;
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            xOffset = currentX;
            yOffset = currentY;
            
            setTranslate(currentX, currentY, modal);
        }
    }
    
    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
    
    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
}
