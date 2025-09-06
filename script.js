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
            } else if (appName === 'pfp-generator') {
                // Open PFP Generator modal
                const pfpGeneratorModal = document.getElementById('pfp-generator-modal');
                if (pfpGeneratorModal) {
                    pfpGeneratorModal.style.display = 'block';
                    // Initialize PFP Generator
                    initPFPGenerator();
                }
                         } else if (appName === 'firefox') {
                 // Open Find the Epic Faces Wiki
                 window.open('https://find-the-epic-faces-official.fandom.com/wiki/Find_the_Epic_Faces_Wiki', '_blank');
            } else if (appName === 'merch') {
                // Open Epic Store in new tab
                window.open('https://store.fun/epic', '_blank');
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
    
    // PFP Generator modal control handlers
    console.log('Setting up PFP Generator modal control handlers...');
    
    const pfpModal = document.getElementById('pfp-generator-modal');
    if (pfpModal) {
        console.log('PFP Generator modal found:', pfpModal);
        
        // Close button (red circle)
        const closeBtn = pfpModal.querySelector('.pfp-generator-close');
        console.log('Close button found:', closeBtn);
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                pfpModal.style.display = 'none';
                console.log('PFP Generator modal closed');
            });
            console.log('PFP Generator close button handler added');
        } else {
            console.error('PFP Generator close button not found');
        }
        
        // Minimize button (yellow circle)
        const minimizeBtn = pfpModal.querySelector('.pfp-generator-minimize');
        console.log('Minimize button found:', minimizeBtn);
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                pfpModal.style.display = 'none';
                console.log('PFP Generator modal minimized');
                // You could add minimize functionality here if needed
            });
            console.log('PFP Generator minimize button handler added');
        } else {
            console.error('PFP Generator minimize button not found');
        }
        
        // Maximize button (green circle)
        const maximizeBtn = pfpModal.querySelector('.pfp-generator-maximize');
        console.log('Maximize button handler added');
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // Toggle between normal and maximized state
                pfpModal.classList.toggle('pfp-generator-maximized');
                console.log('PFP Generator modal maximize toggled');
            });
            console.log('PFP Generator maximize button handler added');
        } else {
            console.error('PFP Generator maximize button not found');
        }
        
        // Close when clicking outside the modal
        pfpModal.addEventListener('click', function(e) {
            if (e.target === pfpModal) {
                pfpModal.style.display = 'none';
                console.log('PFP Generator modal closed via outside click');
            }
        });
        console.log('PFP Generator outside click handler added');
        
    } else {
        console.error('PFP Generator modal element not found during setup');
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

// PFP Generator functionality
let pfpAssets = {
    backgrounds: [],
    sceneFrame: [],
    base: [],
    special: [],
    accessories: [],
    hat: [],
    stickerTopRight: [],
    stickerRight: [],
    stickerTopLeft: [],
    stickerLeft: [],
    overlays: []
};

let currentAssetIndices = {
    backgrounds: 0,
    sceneFrame: 1, // Always start with scene frame selected
    base: 0,
    special: 0,
    accessories: 0,
    hat: 0,
    stickerTopRight: 0,
    stickerRight: 0,
    stickerTopLeft: 0,
    stickerLeft: 0,
    overlays: 0
};

function initPFPGenerator() {
    loadPFPAssets();
    setupPFPCanvas();
    updateAllPreviews();
    
    // Wait a bit for the canvas to be properly initialized
    setTimeout(() => {
        renderPFP();
    }, 100);
}

function loadPFPAssets() {
    // Load ALL assets from the organized pfp-generator folder
    pfpAssets.backgrounds = [
        'assets/pfp-generator/backgrounds/1980361_a96ff.png',
        'assets/pfp-generator/backgrounds/2009.png',
        'assets/pfp-generator/backgrounds/2024-11-06-01.52.png',
        'assets/pfp-generator/backgrounds/360-goth.png',
        'assets/pfp-generator/backgrounds/360-graveyard.png',
        'assets/pfp-generator/backgrounds/360-redbull-zombgirl-3000.png',
        'assets/pfp-generator/backgrounds/911.png',
        'assets/pfp-generator/backgrounds/ai-girl.png',
        'assets/pfp-generator/backgrounds/america.png',
        'assets/pfp-generator/backgrounds/aquarium-vibes.png',
        'assets/pfp-generator/backgrounds/asian-core.png',
        'assets/pfp-generator/backgrounds/Backpagelol1.png',
        'assets/pfp-generator/backgrounds/backrooms-epic-troll-heaven-67.png',
        'assets/pfp-generator/backgrounds/backrooms-plain.png',
        'assets/pfp-generator/backgrounds/big-brain.png',
        'assets/pfp-generator/backgrounds/bleach.png',
        'assets/pfp-generator/backgrounds/blue-core.png',
        'assets/pfp-generator/backgrounds/blue-eyes.png',
        'assets/pfp-generator/backgrounds/brain-worms.png',
        'assets/pfp-generator/backgrounds/brats.png',
        'assets/pfp-generator/backgrounds/candy-space.png',
        'assets/pfp-generator/backgrounds/candy-world.png',
        'assets/pfp-generator/backgrounds/cartooon-network.png',
        'assets/pfp-generator/backgrounds/castle.png',
        'assets/pfp-generator/backgrounds/checkered-ass.png',
        'assets/pfp-generator/backgrounds/cheetah-zombie.png',
        'assets/pfp-generator/backgrounds/cheetah.png',
        'assets/pfp-generator/backgrounds/chief-keef.png',
        'assets/pfp-generator/backgrounds/china-ad.png',
        'assets/pfp-generator/backgrounds/china.png',
        'assets/pfp-generator/backgrounds/chinese-core-puca.png',
        'assets/pfp-generator/backgrounds/ching-chang-ching-chang-chong.png',
        'assets/pfp-generator/backgrounds/cod-calling-cards.png',
        'assets/pfp-generator/backgrounds/creeper.png',
        'assets/pfp-generator/backgrounds/dark-magician.png',
        'assets/pfp-generator/backgrounds/dc.png',
        'assets/pfp-generator/backgrounds/death-core.png',
        'assets/pfp-generator/backgrounds/epic-attack.png',
        'assets/pfp-generator/backgrounds/epic-space.png',
        'assets/pfp-generator/backgrounds/epicc.png',
        'assets/pfp-generator/backgrounds/evangilion.png',
        'assets/pfp-generator/backgrounds/funkeys.png',
        'assets/pfp-generator/backgrounds/gameboy-gastly.png',
        'assets/pfp-generator/backgrounds/gameboy-pokemon-japanese.png',
        'assets/pfp-generator/backgrounds/girl-swag.png',
        'assets/pfp-generator/backgrounds/glorp-scene.png',
        'assets/pfp-generator/backgrounds/glorp.png',
        'assets/pfp-generator/backgrounds/god-wont-let-me.png',
        'assets/pfp-generator/backgrounds/goth-kitty-punk-rock.png',
        'assets/pfp-generator/backgrounds/goth-scene-girls.png',
        'assets/pfp-generator/backgrounds/gyaru-mag.png',
        'assets/pfp-generator/backgrounds/halo.png',
        'assets/pfp-generator/backgrounds/hatsune-miku.png',
        'assets/pfp-generator/backgrounds/heavy-metal.png',
        'assets/pfp-generator/backgrounds/host-hunter.png',
        'assets/pfp-generator/backgrounds/hot-topic-2.png',
        'assets/pfp-generator/backgrounds/hot-topic.png',
        'assets/pfp-generator/backgrounds/i-dog.png',
        'assets/pfp-generator/backgrounds/i-love-cp-nigga.png',
        'assets/pfp-generator/backgrounds/i-love-music-meoooow.png',
        'assets/pfp-generator/backgrounds/idek-atp.png',
        'assets/pfp-generator/backgrounds/IMG_6740-3.png',
        'assets/pfp-generator/backgrounds/IMG_6768-3.png',
        'assets/pfp-generator/backgrounds/internet-kids.png',
        'assets/pfp-generator/backgrounds/invader.png',
        'assets/pfp-generator/backgrounds/ipod-bg.png',
        'assets/pfp-generator/backgrounds/ipod-screen.png',
        'assets/pfp-generator/backgrounds/jap-little-ponies.png',
        'assets/pfp-generator/backgrounds/jap-mag-1.png',
        'assets/pfp-generator/backgrounds/japan.png',
        'assets/pfp-generator/backgrounds/kaewaii-core.png',
        'assets/pfp-generator/backgrounds/kid-cudi.png',
        'assets/pfp-generator/backgrounds/masacer.png',
        'assets/pfp-generator/backgrounds/melody-core.png',
        'assets/pfp-generator/backgrounds/meoooooooow.png',
        'assets/pfp-generator/backgrounds/mlg-roblox-illuminati.png',
        'assets/pfp-generator/backgrounds/mlp-scene.png',
        'assets/pfp-generator/backgrounds/MLP.png',
        'assets/pfp-generator/backgrounds/neon-tokyo.png',
        'assets/pfp-generator/backgrounds/niki-and-drake.png',
        'assets/pfp-generator/backgrounds/obey.png',
        'assets/pfp-generator/backgrounds/ora.png',
        'assets/pfp-generator/backgrounds/pain-glitched.png',
        'assets/pfp-generator/backgrounds/pc-build.png',
        'assets/pfp-generator/backgrounds/pikachu.png',
        'assets/pfp-generator/backgrounds/pink-core.png',
        'assets/pfp-generator/backgrounds/pink-domo.png',
        'assets/pfp-generator/backgrounds/pokemon-gameboy.png',
        'assets/pfp-generator/backgrounds/poly.png',
        'assets/pfp-generator/backgrounds/pyramids.png',
        'assets/pfp-generator/backgrounds/rainbow-checker.png',
        'assets/pfp-generator/backgrounds/rainbow-invader.png',
        'assets/pfp-generator/backgrounds/rainbow-world.png',
        'assets/pfp-generator/backgrounds/rainbow.png',
        'assets/pfp-generator/backgrounds/roblox.png',
        'assets/pfp-generator/backgrounds/scene-green.png',
        'assets/pfp-generator/backgrounds/sheeple.png',
        'assets/pfp-generator/backgrounds/shinny.png',
        'assets/pfp-generator/backgrounds/shonen-jump.png',
        'assets/pfp-generator/backgrounds/skate-2.png',
        'assets/pfp-generator/backgrounds/skitzo-trading.png',
        'assets/pfp-generator/backgrounds/skrillex.png',
        'assets/pfp-generator/backgrounds/snoop-dogg.png',
        'assets/pfp-generator/backgrounds/sonic-x-shadow.png',
        'assets/pfp-generator/backgrounds/sticker-pack-2.png',
        'assets/pfp-generator/backgrounds/sticker-pack-3.png',
        'assets/pfp-generator/backgrounds/sticker-pack.png',
        'assets/pfp-generator/backgrounds/sushi.png',
        'assets/pfp-generator/backgrounds/the-boy.png',
        'assets/pfp-generator/backgrounds/tigre-neon.png',
        'assets/pfp-generator/backgrounds/VaporwaveIcon.png',
        'assets/pfp-generator/backgrounds/vogue.png',
        'assets/pfp-generator/backgrounds/webamp.png',
        'assets/pfp-generator/backgrounds/wizard-101.png',
        'assets/pfp-generator/backgrounds/xbox-ad.png',
        'assets/pfp-generator/backgrounds/xbox-anime-girl.png',
        'assets/pfp-generator/backgrounds/xbox-bubble-gum.png',
        'assets/pfp-generator/backgrounds/xbox-icons.png',
        'assets/pfp-generator/backgrounds/xbox-skull.png',
        'assets/pfp-generator/backgrounds/y2k-monster-3.png',
        'assets/pfp-generator/backgrounds/yugioh-1.png'
    ];
    
    pfpAssets.sceneFrame = [
        'assets/pfp-generator/scene-frame.png'
    ];
    
    pfpAssets.base = [
        'assets/pfp-generator/base/OG.png',
        'assets/pfp-generator/base/korea.png',
        'assets/pfp-generator/base/red.png',
        'assets/pfp-generator/base/green.png',
        'assets/pfp-generator/base/light-blue.png',
        'assets/pfp-generator/base/blue.png',
        'assets/pfp-generator/base/dark-blue.png',
        'assets/pfp-generator/base/purple.png',
        'assets/pfp-generator/base/pink.png',
        'assets/pfp-generator/base/Cod-gold.png',
        'assets/pfp-generator/base/galaxy.png',
        'assets/pfp-generator/base/star.png',
        'assets/pfp-generator/base/pink-cheetah.png',
        'assets/pfp-generator/base/usa.png',
        'assets/pfp-generator/base/derp.png',
        'assets/pfp-generator/base/dark.png',
        'assets/pfp-generator/base/stoned.png',
        'assets/pfp-generator/base/nut.png',
        'assets/pfp-generator/base/rainbow-001.png',
        'assets/pfp-generator/base/clown.png',
        'assets/pfp-generator/base/white-clown.png',
        'assets/pfp-generator/base/horn.png',
        'assets/pfp-generator/base/monster.png',
        'assets/pfp-generator/base/love.png',
        'assets/pfp-generator/base/rainbow.png',
        'assets/pfp-generator/base/cute-derp.png'
    ];
    
    pfpAssets.special = [
        'assets/pfp-generator/special-face/balloon.png',
        'assets/pfp-generator/special-face/beat.png',
        'assets/pfp-generator/special-face/cool-face.png',
        'assets/pfp-generator/special-face/crystal.png',
        'assets/pfp-generator/special-face/Cybernetic_Epic_Face.png',
        'assets/pfp-generator/special-face/dark-sonic.png',
        'assets/pfp-generator/special-face/death.png',
        'assets/pfp-generator/special-face/demon.png',
        'assets/pfp-generator/special-face/DJ.png',
        'assets/pfp-generator/special-face/dracula.png',
        'assets/pfp-generator/special-face/Dream_Epic_Face.png',
        'assets/pfp-generator/special-face/emo-girl.png',
        'assets/pfp-generator/special-face/Evil_Epic_Face.png',
        'assets/pfp-generator/special-face/Frozen_Epic_Face.png',
        'assets/pfp-generator/special-face/Girl.png',
        'assets/pfp-generator/special-face/goth-neon.png',
        'assets/pfp-generator/special-face/grey-cat.png',
        'assets/pfp-generator/special-face/joker.png',
        'assets/pfp-generator/special-face/kitsune.png',
        'assets/pfp-generator/special-face/Knight_Epic_Face.png',
        'assets/pfp-generator/special-face/mdm8.png',
        'assets/pfp-generator/special-face/morphed-glorp.png',
        'assets/pfp-generator/special-face/Mlp-rainbow.png',
        'assets/pfp-generator/special-face/Mlp-shadow.png',
        'assets/pfp-generator/special-face/Nightmare_Epic_Face.png',
        'assets/pfp-generator/special-face/Nightmare_Epic_Face-copy.png',
        'assets/pfp-generator/special-face/Ripped_Apart_Epic_Face.png',
        'assets/pfp-generator/special-face/ryuk.png',
        'assets/pfp-generator/special-face/spirit.png',
        'assets/pfp-generator/special-face/Splink_Epic_Face.png',
        'assets/pfp-generator/special-face/Starstruck_Epic_Face.png',
        'assets/pfp-generator/special-face/Unicorn.png',
        'assets/pfp-generator/special-face/Yeti_Epic_Face.png',
        'assets/pfp-generator/special-face/zombie-cat.png',
        'assets/pfp-generator/special-face/Zombie_Epic_Face.png'
    ];
    
    pfpAssets.accessories = [
        'assets/pfp-generator/accessories/3D-Glasses.png',
        'assets/pfp-generator/accessories/cig.png',
        'assets/pfp-generator/accessories/Ghost_Epic_Face.png',
        'assets/pfp-generator/accessories/Love-eye-patch.png',
        'assets/pfp-generator/accessories/Mustach.png',
        'assets/pfp-generator/accessories/Newspaper_Epic_Face.png',
        'assets/pfp-generator/accessories/Pit-vipers.png',
        'assets/pfp-generator/accessories/sharingan.png',
        'assets/pfp-generator/accessories/usa-party-glasses.png'
    ];
    
    pfpAssets.hat = [
        'assets/pfp-generator/hat/Acheron_Epic_Face.png',
        'assets/pfp-generator/hat/Aku_Epic_Face.png',
        'assets/pfp-generator/hat/Angel_Epic_Face.png',
        'assets/pfp-generator/hat/Angel-2.png',
        'assets/pfp-generator/hat/angel3.png',
        'assets/pfp-generator/hat/Arrow_Head_Epic_Face.png',
        'assets/pfp-generator/hat/black-bandana.png',
        'assets/pfp-generator/hat/blood-bandana.png',
        'assets/pfp-generator/hat/crown.png',
        'assets/pfp-generator/hat/dc-cap.png',
        'assets/pfp-generator/hat/domo-hat.png',
        'assets/pfp-generator/hat/domo-obey.png',
        'assets/pfp-generator/hat/emo-hair-green.png',
        'assets/pfp-generator/hat/emo-hair-pink.png',
        'assets/pfp-generator/hat/galaxy-obey.png',
        'assets/pfp-generator/hat/i-3-Haters.png',
        'assets/pfp-generator/hat/Jester-outfit.png',
        'assets/pfp-generator/hat/Melting_Epic_Face.png',
        'assets/pfp-generator/hat/mtn-dew.png',
        'assets/pfp-generator/hat/Obey.png',
        'assets/pfp-generator/hat/partyy.png',
        'assets/pfp-generator/hat/Skull_Epic_Face.png',
        'assets/pfp-generator/hat/Tgod.png'
    ];
    
    pfpAssets.stickerTopRight = [
        'assets/pfp-generator/stickers/top-right/Butter.png',
        'assets/pfp-generator/stickers/top-right/chaotic.png',
        'assets/pfp-generator/stickers/top-right/Dragoon.png',
        'assets/pfp-generator/stickers/top-right/Fairy-Odd-Parents.png',
        'assets/pfp-generator/stickers/top-right/KIK.png',
        'assets/pfp-generator/stickers/top-right/monster.png',
        'assets/pfp-generator/stickers/top-right/Neff.png',
        'assets/pfp-generator/stickers/top-right/pierced-veil.png',
        'assets/pfp-generator/stickers/top-right/Please_No_Epic_Faces.png',
        'assets/pfp-generator/stickers/top-right/Pony-explorer.png',
        'assets/pfp-generator/stickers/top-right/prestige-1.png',
        'assets/pfp-generator/stickers/top-right/prestige-2.png',
        'assets/pfp-generator/stickers/top-right/prestige-3.png',
        'assets/pfp-generator/stickers/top-right/prestige-4.png',
        'assets/pfp-generator/stickers/top-right/prestige-5.png',
        'assets/pfp-generator/stickers/top-right/prestige-6.png',
        'assets/pfp-generator/stickers/top-right/prestige-7.png',
        'assets/pfp-generator/stickers/top-right/prestige-8.png',
        'assets/pfp-generator/stickers/top-right/prestige-9.png',
        'assets/pfp-generator/stickers/top-right/prestige-10.png',
        'assets/pfp-generator/stickers/top-right/prestige-11.png',
        'assets/pfp-generator/stickers/top-right/prestige-12.png',
        'assets/pfp-generator/stickers/top-right/prestige-13.png',
        'assets/pfp-generator/stickers/top-right/prestige-14.png',
        'assets/pfp-generator/stickers/top-right/pretige-master.png',
        'assets/pfp-generator/stickers/top-right/SFPR-LMFAO.png',
        'assets/pfp-generator/stickers/top-right/sonic.png',
        'assets/pfp-generator/stickers/top-right/XD.png',
        'assets/pfp-generator/stickers/top-right/you-suck.png'
    ];
    
    pfpAssets.stickerRight = [
        'assets/pfp-generator/stickers/right/8bit-cat.png',
        'assets/pfp-generator/stickers/right/anarchy.png',
        'assets/pfp-generator/stickers/right/artix-dog.png',
        'assets/pfp-generator/stickers/right/bioncle.png',
        'assets/pfp-generator/stickers/right/butterfly-knife.png',
        'assets/pfp-generator/stickers/right/cheetah-swag.png',
        'assets/pfp-generator/stickers/right/cool-s.png',
        'assets/pfp-generator/stickers/right/curesed-gameboy.png',
        'assets/pfp-generator/stickers/right/DC-studs.png',
        'assets/pfp-generator/stickers/right/digi-cam.png',
        'assets/pfp-generator/stickers/right/emo-ticon.png',
        'assets/pfp-generator/stickers/right/Epic_Banana.png',
        'assets/pfp-generator/stickers/right/Epic_Computer.png',
        'assets/pfp-generator/stickers/right/gears-of-war.png',
        'assets/pfp-generator/stickers/right/glorp-dog.png',
        'assets/pfp-generator/stickers/right/goth-baddy-1.png',
        'assets/pfp-generator/stickers/right/hatsune-rockstar.png',
        'assets/pfp-generator/stickers/right/htf.png',
        'assets/pfp-generator/stickers/right/ipod.png',
        'assets/pfp-generator/stickers/right/ipods.png',
        'assets/pfp-generator/stickers/right/jet-set-radio.png',
        'assets/pfp-generator/stickers/right/jiggle-dash.png',
        'assets/pfp-generator/stickers/right/Kirby-Headphones.png',
        'assets/pfp-generator/stickers/right/kuromi-001.png',
        'assets/pfp-generator/stickers/right/KUROMI.png',
        'assets/pfp-generator/stickers/right/Lean-Cup-2.png',
        'assets/pfp-generator/stickers/right/lmfao-glitter.png',
        'assets/pfp-generator/stickers/right/Maple-story-mushroom.png',
        'assets/pfp-generator/stickers/right/MELODY.png',
        'assets/pfp-generator/stickers/right/minecraft-pov.png',
        'assets/pfp-generator/stickers/right/mountain-dew.png',
        'assets/pfp-generator/stickers/right/MW2.png',
        'assets/pfp-generator/stickers/right/NY-zebra.png',
        'assets/pfp-generator/stickers/right/quagen-pint.png',
        'assets/pfp-generator/stickers/right/rawr-XD.png',
        'assets/pfp-generator/stickers/right/scary-goth-mommy.png',
        'assets/pfp-generator/stickers/right/skibidi-sonic.png',
        'assets/pfp-generator/stickers/right/skrttles-glitter.png',
        'assets/pfp-generator/stickers/right/speaker-head.png',
        'assets/pfp-generator/stickers/right/star-man.png',
        'assets/pfp-generator/stickers/right/tnt.png',
        'assets/pfp-generator/stickers/right/tomogachi.png',
        'assets/pfp-generator/stickers/right/Water-girl.png'
    ];
    
    pfpAssets.stickerTopLeft = [
        'assets/pfp-generator/stickers/top-left/100%-cute.png',
        'assets/pfp-generator/stickers/top-left/bakugan.png',
        'assets/pfp-generator/stickers/top-left/Epic_Vitamin.png',
        'assets/pfp-generator/stickers/top-left/EPIC-FACE.png',
        'assets/pfp-generator/stickers/top-left/GORILLAZ.png',
        'assets/pfp-generator/stickers/top-left/GTA-SA.png',
        'assets/pfp-generator/stickers/top-left/horizon.png',
        'assets/pfp-generator/stickers/top-left/hypixel.png',
        'assets/pfp-generator/stickers/top-left/i-3-brains.png',
        'assets/pfp-generator/stickers/top-left/KORN.png',
        'assets/pfp-generator/stickers/top-left/Layer-91.png',
        'assets/pfp-generator/stickers/top-left/Mc.png',
        'assets/pfp-generator/stickers/top-left/midnight-club.png',
        'assets/pfp-generator/stickers/top-left/MLP.png',
        'assets/pfp-generator/stickers/top-left/pink-swag.png',
        'assets/pfp-generator/stickers/top-left/Saw_Epic_Face.png',
        'assets/pfp-generator/stickers/top-left/simple-plan.png',
        'assets/pfp-generator/stickers/top-left/SLIPKNOT.png',
        'assets/pfp-generator/stickers/top-left/Sonic-404.png',
        'assets/pfp-generator/stickers/top-left/swag.png',
        'assets/pfp-generator/stickers/top-left/Winamp.png',
        'assets/pfp-generator/stickers/top-left/Wizard-101.png',
        'assets/pfp-generator/stickers/top-left/yugioh.png',
        'assets/pfp-generator/stickers/top-left/zombie-kitty.png',
        'assets/pfp-generator/stickers/top-left/zombie-nyan-cat.png'
    ];
    
    pfpAssets.stickerLeft = [
        'assets/pfp-generator/stickers/left/Ancient_Statue_Epic_Face.png',
        'assets/pfp-generator/stickers/left/annoying-orange.png',
        'assets/pfp-generator/stickers/left/Anvil_Epic_Face.png',
        'assets/pfp-generator/stickers/left/awp.png',
        'assets/pfp-generator/stickers/left/Axe_Epic_Face.png',
        'assets/pfp-generator/stickers/left/bit-me-bracelete.png',
        'assets/pfp-generator/stickers/left/black-queen.png',
        'assets/pfp-generator/stickers/left/bulbasor.png',
        'assets/pfp-generator/stickers/left/Cactus_Epic_Face.png',
        'assets/pfp-generator/stickers/left/diamond-sword.png',
        'assets/pfp-generator/stickers/left/EMO-BOB.png',
        'assets/pfp-generator/stickers/left/emo-zombie-cat.png',
        'assets/pfp-generator/stickers/left/Epic_Cereal.png',
        'assets/pfp-generator/stickers/left/fairy.png',
        'assets/pfp-generator/stickers/left/Fire-boy.png',
        'assets/pfp-generator/stickers/left/Flappy-bird.png',
        'assets/pfp-generator/stickers/left/gold-axe.png',
        'assets/pfp-generator/stickers/left/goth-little-pony.png',
        'assets/pfp-generator/stickers/left/green-day.png',
        'assets/pfp-generator/stickers/left/hello-kitty.png',
        'assets/pfp-generator/stickers/left/hot-ponies.png',
        'assets/pfp-generator/stickers/left/Internet_Epic_Face.png',
        'assets/pfp-generator/stickers/left/krooked.png',
        'assets/pfp-generator/stickers/left/Mango-monster.png',
        'assets/pfp-generator/stickers/left/minecraft-scene.png',
        'assets/pfp-generator/stickers/left/Og-monster.png',
        'assets/pfp-generator/stickers/left/pack-a-punch.png',
        'assets/pfp-generator/stickers/left/Pink-Zomboid.png',
        'assets/pfp-generator/stickers/left/Popsicle_Epic_Face.png',
        'assets/pfp-generator/stickers/left/rainbow-boots.png',
        'assets/pfp-generator/stickers/left/rainbow-dike.png',
        'assets/pfp-generator/stickers/left/Rotmg-white-bag.png',
        'assets/pfp-generator/stickers/left/selfie.png',
        'assets/pfp-generator/stickers/left/SKELE-PONY.png',
        'assets/pfp-generator/stickers/left/ultra-rosa.png',
        'assets/pfp-generator/stickers/left/ultra.png',
        'assets/pfp-generator/stickers/left/Veigar.png',
        'assets/pfp-generator/stickers/left/white-puffle.png',
        'assets/pfp-generator/stickers/left/zomboid.png'
    ];
    
    pfpAssets.overlays = [
        'assets/pfp-generator/overlays/AND-#YOLO.png',
        'assets/pfp-generator/overlays/AND-BE--A-BELIEBER.png',
        'assets/pfp-generator/overlays/AND-BE-EPIC.png',
        'assets/pfp-generator/overlays/HAIIIIII.png',
        'assets/pfp-generator/overlays/im-so-hardcore.png',
        'assets/pfp-generator/overlays/Internet-party.png',
        'assets/pfp-generator/overlays/Layer-79.png',
        'assets/pfp-generator/overlays/overlay.png',
        'assets/pfp-generator/overlays/pokemon-vmax.png',
        'assets/pfp-generator/overlays/scene-stickers.png',
        'assets/pfp-generator/overlays/TIME-TO-MAKE-CHANGES.png',
        'assets/pfp-generator/overlays/Trasher-overlay.png',
        'assets/pfp-generator/overlays/YOU-NEVER-KNOW--WHAT-YOU\'RE-GONNA-GET.png'
    ];
}

function setupPFPCanvas() {
    const canvas = document.getElementById('pfp-canvas');
    if (!canvas) return;
    
    // Ensure canvas has proper dimensions
    canvas.width = 500;
    canvas.height = 500;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Set a default background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 500, 500);
}

function renderPFP() {
    const canvas = document.getElementById('pfp-canvas');
    if (!canvas) return;
    
    // Ensure canvas has proper dimensions
    if (canvas.width === 0 || canvas.height === 0) {
        canvas.width = 500;
        canvas.height = 500;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, 500, 500);
    
    // Simple approach: draw everything in sequence with setTimeout to ensure proper order
    let currentStep = 0;
    
    function drawNextStep() {
        switch(currentStep) {
            case 0: // Background
                if (pfpAssets.backgrounds.length > 0 && currentAssetIndices.backgrounds > 0) {
                    const bgImg = new Image();
                    bgImg.onload = function() {
                        ctx.drawImage(bgImg, 0, 0, 500, 500);
                        currentStep = 1;
                        setTimeout(drawNextStep, 10); // Small delay to ensure drawing is complete
                    };
                    bgImg.onerror = function() {
                        console.warn('Failed to load background image:', bgImg.src);
                        currentStep = 1;
                        setTimeout(drawNextStep, 10);
                    };
                    bgImg.src = pfpAssets.backgrounds[currentAssetIndices.backgrounds - 1];
                } else {
                    currentStep = 1;
                    setTimeout(drawNextStep, 10);
                }
                break;
                
            case 1: // Scene Frame (always drawn after background)
                if (pfpAssets.sceneFrame.length > 0 && currentAssetIndices.sceneFrame > 0) {
                    const sceneFrameImg = new Image();
                    sceneFrameImg.onload = function() {
                        ctx.drawImage(sceneFrameImg, 0, 0, 500, 500);
                        currentStep = 2;
                        setTimeout(drawNextStep, 10);
                    };
                    sceneFrameImg.onerror = function() {
                        console.warn('Failed to load scene frame image');
                        currentStep = 2;
                        setTimeout(drawNextStep, 10);
                    };
                    sceneFrameImg.src = pfpAssets.sceneFrame[currentAssetIndices.sceneFrame - 1];
                } else {
                    currentStep = 2;
                    setTimeout(drawNextStep, 10);
                }
                break;
                
            case 2: // Base or Special Face
                if (pfpAssets.special.length > 0 && currentAssetIndices.special > 0) {
                    const specialImg = new Image();
                    specialImg.onload = function() {
                        ctx.drawImage(specialImg, 0, 0, 500, 500);
                        currentStep = 3;
                        setTimeout(drawNextStep, 10);
                    };
                    specialImg.onerror = function() {
                        console.warn('Failed to load special face image:', specialImg.src);
                        currentStep = 3;
                        setTimeout(drawNextStep, 10);
                    };
                    specialImg.src = pfpAssets.special[currentAssetIndices.special - 1];
                } else if (pfpAssets.base.length > 0 && currentAssetIndices.base > 0) {
                    const baseImg = new Image();
                    baseImg.onload = function() {
                        ctx.drawImage(baseImg, 0, 0, 500, 500);
                        currentStep = 3;
                        setTimeout(drawNextStep, 10);
                    };
                    baseImg.onerror = function() {
                        console.warn('Failed to load base image:', baseImg.src);
                        currentStep = 3;
                        setTimeout(drawNextStep, 10);
                    };
                    baseImg.src = pfpAssets.base[currentAssetIndices.base - 1];
                } else {
                    currentStep = 3;
                    setTimeout(drawNextStep, 10);
                }
                break;
                
            case 3: // Accessories
                if (pfpAssets.accessories.length > 0 && currentAssetIndices.accessories > 0) {
                    const accImg = new Image();
                    accImg.onload = function() {
                        ctx.drawImage(accImg, 0, 0, 500, 500);
                        currentStep = 4;
                        setTimeout(drawNextStep, 10);
                    };
                    accImg.onerror = function() {
                        console.warn('Failed to load accessories image:', accImg.src);
                        currentStep = 4;
                        setTimeout(drawNextStep, 10);
                    };
                    accImg.src = pfpAssets.accessories[currentAssetIndices.accessories - 1];
                } else {
                    currentStep = 4;
                    setTimeout(drawNextStep, 10);
                }
                break;
                
            case 4: // Hat
                if (pfpAssets.hat.length > 0 && currentAssetIndices.hat > 0) {
                    const hatImg = new Image();
                    hatImg.onload = function() {
                        ctx.drawImage(hatImg, 0, 0, 500, 500);
                        currentStep = 5;
                        setTimeout(drawNextStep, 10);
                    };
                    hatImg.onerror = function() {
                        console.warn('Failed to load hat image:', hatImg.src);
                        currentStep = 5;
                        setTimeout(drawNextStep, 10);
                    };
                    hatImg.src = pfpAssets.hat[currentAssetIndices.hat - 1];
                } else {
                    currentStep = 5;
                    setTimeout(drawNextStep, 10);
                }
                break;
                
            case 5: // Stickers
                drawStickers();
                break;
                
            case 6: // Overlays
                drawOverlays();
                break;
        }
    }
    
    // Start the rendering process
    drawNextStep();
    
    function drawStickers() {
        // Draw stickers in order
        let stickerCount = 0;
        const totalStickers = 4;
        
        function drawNextSticker() {
            if (stickerCount >= totalStickers) {
                // Stickers done, now draw overlays
                currentStep = 6;
                setTimeout(drawNextStep, 10);
                return;
            }
            
            let stickerPath = '';
            
            switch(stickerCount) {
                case 0: // Top Right
                    if (pfpAssets.stickerTopRight.length > 0 && currentAssetIndices.stickerTopRight > 0) {
                        stickerPath = pfpAssets.stickerTopRight[currentAssetIndices.stickerTopRight - 1];
                    }
                    break;
                case 1: // Right
                    if (pfpAssets.stickerRight.length > 0 && currentAssetIndices.stickerRight > 0) {
                        stickerPath = pfpAssets.stickerRight[currentAssetIndices.stickerRight - 1];
                    }
                    break;
                case 2: // Top Left
                    if (pfpAssets.stickerTopLeft.length > 0 && currentAssetIndices.stickerTopLeft > 0) {
                        stickerPath = pfpAssets.stickerTopLeft[currentAssetIndices.stickerTopLeft - 1];
                    }
                    break;
                case 3: // Left
                    if (pfpAssets.stickerLeft.length > 0 && currentAssetIndices.stickerLeft > 0) {
                        stickerPath = pfpAssets.stickerLeft[currentAssetIndices.stickerLeft - 1];
                    }
                    break;
            }
            
            if (stickerPath) {
                const stickerImg = new Image();
                stickerImg.onload = function() {
                    ctx.drawImage(stickerImg, 0, 0, 500, 500);
                    stickerCount++;
                    drawNextSticker();
                };
                stickerImg.onerror = function() {
                    console.warn('Failed to load sticker image:', stickerImg.src);
                    stickerCount++;
                    drawNextSticker();
                };
                stickerImg.src = stickerPath;
            } else {
                stickerCount++;
                drawNextSticker();
            }
        }
        
        drawNextSticker();
    }
    
    function drawOverlays() {
        // Draw overlays
        if (pfpAssets.overlays.length > 0 && currentAssetIndices.overlays > 0) {
            const overlayImg = new Image();
            overlayImg.onload = function() {
                ctx.drawImage(overlayImg, 0, 0, 500, 500);
            };
            overlayImg.onerror = function() {
                console.warn('Failed to load overlay image:', overlayImg.src);
            };
            overlayImg.src = pfpAssets.overlays[currentAssetIndices.overlays - 1];
        }
    }
}



function updateAllPreviews() {
    updatePreview('backgrounds', 'background-name', 'background-counter');
    updatePreview('sceneFrame', 'sceneFrame-name', 'sceneFrame-counter');
    updatePreview('base', 'base-name', 'base-counter');
    updatePreview('special', 'special-name', 'special-counter');
    updatePreview('accessories', 'accessories-name', 'accessories-counter');
    updatePreview('hat', 'hat-name', 'hat-counter');
    updatePreview('stickerTopRight', 'stickerTopRight-name', 'stickerTopRight-counter');
    updatePreview('stickerRight', 'stickerRight-name', 'stickerRight-counter');
    updatePreview('stickerTopLeft', 'stickerTopLeft-name', 'stickerTopLeft-counter');
    updatePreview('stickerLeft', 'stickerLeft-name', 'stickerLeft-counter');
    updatePreview('overlays', 'overlays-name', 'overlays-counter');
}

function updatePreview(assetType, nameId, counterId) {
    const nameElement = document.getElementById(nameId);
    const counterElement = document.getElementById(counterId);
    
    if (!nameElement || !counterElement) return;
    
    const assets = pfpAssets[assetType];
    const currentIndex = currentAssetIndices[assetType];
    
    if (assets.length === 0) {
        nameElement.textContent = 'No assets';
        counterElement.textContent = '0 / 0';
        return;
    }
    
    if (currentIndex === 0) {
        nameElement.textContent = 'None';
        counterElement.textContent = `0 / ${assets.length}`;
        return;
    }
    
    const assetPath = assets[currentIndex - 1];
    const fileName = assetPath.split('/').pop().replace('.png', '').replace('.jpg', '');
    
    nameElement.textContent = fileName;
    counterElement.textContent = `${currentIndex} / ${assets.length}`;
}

function nextAsset(assetType) {
    const assets = pfpAssets[assetType];
    if (assets.length === 0) return;
    
    currentAssetIndices[assetType]++;
    if (currentAssetIndices[assetType] > assets.length) {
        currentAssetIndices[assetType] = 0;
    }
    
    const nameId = `${assetType.replace(/([A-Z])/g, '-$1').toLowerCase()}-name`;
    const counterId = `${assetType.replace(/([A-Z])/g, '-$1').toLowerCase()}-counter`;
    
    updatePreview(assetType, nameId, counterId);
    
    // Wait a bit for updates to complete
    setTimeout(() => {
        renderPFP();
    }, 50);
}

function previousAsset(assetType) {
    const assets = pfpAssets[assetType];
    if (assets.length === 0) return;
    
    currentAssetIndices[assetType]--;
    if (currentAssetIndices[assetType] < 0) {
        currentAssetIndices[assetType] = assets.length;
    }
    
    const nameId = `${assetType.replace(/([A-Z])/g, '-$1').toLowerCase()}-name`;
    const counterId = `${assetType.replace(/([A-Z])/g, '-$1').toLowerCase()}-counter`;
    
    updatePreview(assetType, nameId, counterId);
    
    // Wait a bit for updates to complete
    setTimeout(() => {
        renderPFP();
    }, 50);
}

function randomizePFP() {
    Object.keys(currentAssetIndices).forEach(assetType => {
        const assets = pfpAssets[assetType];
        if (assets.length > 0) {
            // Randomize between 0 (none) and the number of assets
            currentAssetIndices[assetType] = Math.floor(Math.random() * (assets.length + 1));
        } else {
            currentAssetIndices[assetType] = 0;
        }
    });
    
    updateAllPreviews();
    
    // Wait a bit for updates to complete
    setTimeout(() => {
        renderPFP();
    }, 100);
}

function downloadPFP() {
    const canvas = document.getElementById('pfp-canvas');
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'epic-face-pfp.png';
    link.href = canvas.toDataURL();
    link.click();
}

// Make PFP Generator modal draggable
function makePFPGeneratorDraggable() {
    const modal = document.getElementById('pfp-generator-modal');
    const dragHandle = document.getElementById('pfp-generator-drag-handle');
    
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
        // Don't start dragging if clicking on control buttons
        if (e.target.closest('.pfp-generator-close') || 
            e.target.closest('.pfp-generator-minimize') || 
            e.target.closest('.pfp-generator-maximize')) {
            return;
        }
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === dragHandle || e.target.closest('.pfp-generator-modal-header')) {
            isDragging = true;
            modal.classList.add('pfp-generator-dragging');
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
        modal.classList.remove('pfp-generator-dragging');
    }
}

// Initialize PFP Generator modal dragging when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    makePFPGeneratorDraggable();
});
