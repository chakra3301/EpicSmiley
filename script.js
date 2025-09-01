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
    // Load ALL assets from the epic pfp gen folder
    pfpAssets.backgrounds = [
        'epic pfp gen/Backgrounds/1980361_a96ff.png',
        'epic pfp gen/Backgrounds/2009.png',
        'epic pfp gen/Backgrounds/2024-11-06-01.52.png',
        'epic pfp gen/Backgrounds/360-goth.png',
        'epic pfp gen/Backgrounds/360-graveyard.png',
        'epic pfp gen/Backgrounds/360-redbull-zombgirl-3000.png',
        'epic pfp gen/Backgrounds/911.png',
        'epic pfp gen/Backgrounds/ai-girl.png',
        'epic pfp gen/Backgrounds/america.png',
        'epic pfp gen/Backgrounds/aquarium-vibes.png',
        'epic pfp gen/Backgrounds/asian-core.png',
        'epic pfp gen/Backgrounds/Backpagelol1.png',
        'epic pfp gen/Backgrounds/backrooms-epic-troll-heaven-67.png',
        'epic pfp gen/Backgrounds/backrooms-plain.png',
        'epic pfp gen/Backgrounds/big-brain.png',
        'epic pfp gen/Backgrounds/bleach.png',
        'epic pfp gen/Backgrounds/blue-core.png',
        'epic pfp gen/Backgrounds/blue-eyes.png',
        'epic pfp gen/Backgrounds/brain-worms.png',
        'epic pfp gen/Backgrounds/brats.png',
        'epic pfp gen/Backgrounds/candy-space.png',
        'epic pfp gen/Backgrounds/candy-world.png',
        'epic pfp gen/Backgrounds/cartooon-network.png',
        'epic pfp gen/Backgrounds/castle.png',
        'epic pfp gen/Backgrounds/checkered-ass.png',
        'epic pfp gen/Backgrounds/cheetah-zombie.png',
        'epic pfp gen/Backgrounds/cheetah.png',
        'epic pfp gen/Backgrounds/chief-keef.png',
        'epic pfp gen/Backgrounds/china-ad.png',
        'epic pfp gen/Backgrounds/china.png',
        'epic pfp gen/Backgrounds/chinese-core-puca.png',
        'epic pfp gen/Backgrounds/ching-chang-ching-chang-chong.png',
        'epic pfp gen/Backgrounds/cod-calling-cards.png',
        'epic pfp gen/Backgrounds/creeper.png',
        'epic pfp gen/Backgrounds/dark-magician.png',
        'epic pfp gen/Backgrounds/dc.png',
        'epic pfp gen/Backgrounds/death-core.png',
        'epic pfp gen/Backgrounds/epic-attack.png',
        'epic pfp gen/Backgrounds/epic-space.png',
        'epic pfp gen/Backgrounds/epicc.png',
        'epic pfp gen/Backgrounds/evangilion.png',
        'epic pfp gen/Backgrounds/funkeys.png',
        'epic pfp gen/Backgrounds/gameboy-gastly.png',
        'epic pfp gen/Backgrounds/gameboy-pokemon-japanese.png',
        'epic pfp gen/Backgrounds/girl-swag.png',
        'epic pfp gen/Backgrounds/glorp-scene.png',
        'epic pfp gen/Backgrounds/glorp.png',
        'epic pfp gen/Backgrounds/god-wont-let-me.png',
        'epic pfp gen/Backgrounds/goth-kitty-punk-rock.png',
        'epic pfp gen/Backgrounds/goth-scene-girls.png',
        'epic pfp gen/Backgrounds/gyaru-mag.png',
        'epic pfp gen/Backgrounds/halo.png',
        'epic pfp gen/Backgrounds/hatsune-miku.png',
        'epic pfp gen/Backgrounds/heavy-metal.png',
        'epic pfp gen/Backgrounds/host-hunter.png',
        'epic pfp gen/Backgrounds/hot-topic-2.png',
        'epic pfp gen/Backgrounds/hot-topic.png',
        'epic pfp gen/Backgrounds/i-dog.png',
        'epic pfp gen/Backgrounds/i-love-cp-nigga.png',
        'epic pfp gen/Backgrounds/i-love-music-meoooow.png',
        'epic pfp gen/Backgrounds/idek-atp.png',
        'epic pfp gen/Backgrounds/IMG_6740-3.png',
        'epic pfp gen/Backgrounds/IMG_6768-3.png',
        'epic pfp gen/Backgrounds/internet-kids.png',
        'epic pfp gen/Backgrounds/invader.png',
        'epic pfp gen/Backgrounds/ipod-bg.png',
        'epic pfp gen/Backgrounds/ipod-screen.png',
        'epic pfp gen/Backgrounds/jap-little-ponies.png',
        'epic pfp gen/Backgrounds/jap-mag-1.png',
        'epic pfp gen/Backgrounds/japan.png',
        'epic pfp gen/Backgrounds/kaewaii-core.png',
        'epic pfp gen/Backgrounds/kid-cudi.png',
        'epic pfp gen/Backgrounds/masacer.png',
        'epic pfp gen/Backgrounds/melody-core.png',
        'epic pfp gen/Backgrounds/meoooooooow.png',
        'epic pfp gen/Backgrounds/mlg-roblox-illuminati.png',
        'epic pfp gen/Backgrounds/mlp-scene.png',
        'epic pfp gen/Backgrounds/MLP.png',
        'epic pfp gen/Backgrounds/neon-tokyo.png',
        'epic pfp gen/Backgrounds/niki-and-drake.png',
        'epic pfp gen/Backgrounds/obey.png',
        'epic pfp gen/Backgrounds/ora.png',
        'epic pfp gen/Backgrounds/pain-glitched.png',
        'epic pfp gen/Backgrounds/pc-build.png',
        'epic pfp gen/Backgrounds/pikachu.png',
        'epic pfp gen/Backgrounds/pink-core.png',
        'epic pfp gen/Backgrounds/pink-domo.png',
        'epic pfp gen/Backgrounds/pokemon-gameboy.png',
        'epic pfp gen/Backgrounds/poly.png',
        'epic pfp gen/Backgrounds/pyramids.png',
        'epic pfp gen/Backgrounds/rainbow-checker.png',
        'epic pfp gen/Backgrounds/rainbow-invader.png',
        'epic pfp gen/Backgrounds/rainbow-world.png',
        'epic pfp gen/Backgrounds/rainbow.png',
        'epic pfp gen/Backgrounds/roblox.png',
        'epic pfp gen/Backgrounds/scene-green.png',
        'epic pfp gen/Backgrounds/sheeple.png',
        'epic pfp gen/Backgrounds/shinny.png',
        'epic pfp gen/Backgrounds/shonen-jump.png',
        'epic pfp gen/Backgrounds/skate-2.png',
        'epic pfp gen/Backgrounds/skitzo-trading.png',
        'epic pfp gen/Backgrounds/skrillex.png',
        'epic pfp gen/Backgrounds/snoop-dogg.png',
        'epic pfp gen/Backgrounds/sonic-x-shadow.png',
        'epic pfp gen/Backgrounds/sticker-pack-2.png',
        'epic pfp gen/Backgrounds/sticker-pack-3.png',
        'epic pfp gen/Backgrounds/sticker-pack.png',
        'epic pfp gen/Backgrounds/sushi.png',
        'epic pfp gen/Backgrounds/the-boy.png',
        'epic pfp gen/Backgrounds/tigre-neon.png',
        'epic pfp gen/Backgrounds/VaporwaveIcon.png',
        'epic pfp gen/Backgrounds/vogue.png',
        'epic pfp gen/Backgrounds/webamp.png',
        'epic pfp gen/Backgrounds/wizard-101.png',
        'epic pfp gen/Backgrounds/xbox-ad.png',
        'epic pfp gen/Backgrounds/xbox-anime-girl.png',
        'epic pfp gen/Backgrounds/xbox-bubble-gum.png',
        'epic pfp gen/Backgrounds/xbox-icons.png',
        'epic pfp gen/Backgrounds/xbox-skull.png',
        'epic pfp gen/Backgrounds/y2k-monster-3.png',
        'epic pfp gen/Backgrounds/yugioh-1.png'
    ];
    
    pfpAssets.sceneFrame = [
        'epic pfp gen/scene-frame.png'
    ];
    
    pfpAssets.base = [
        'epic pfp gen/base/OG.png',
        'epic pfp gen/base/korea.png',
        'epic pfp gen/base/red.png',
        'epic pfp gen/base/green.png',
        'epic pfp gen/base/light-blue.png',
        'epic pfp gen/base/blue.png',
        'epic pfp gen/base/dark-blue.png',
        'epic pfp gen/base/purple.png',
        'epic pfp gen/base/pink.png',
        'epic pfp gen/base/Cod-gold.png',
        'epic pfp gen/base/galaxy.png',
        'epic pfp gen/base/star.png',
        'epic pfp gen/base/pink-cheetah.png',
        'epic pfp gen/base/usa.png',
        'epic pfp gen/base/derp.png',
        'epic pfp gen/base/dark.png',
        'epic pfp gen/base/stoned.png',
        'epic pfp gen/base/nut.png',
        'epic pfp gen/base/rainbow-001.png',
        'epic pfp gen/base/clown.png',
        'epic pfp gen/base/white-clown.png',
        'epic pfp gen/base/horn.png',
        'epic pfp gen/base/monster.png',
        'epic pfp gen/base/love.png',
        'epic pfp gen/base/rainbow.png',
        'epic pfp gen/base/cute-derp.png'
    ];
    
    pfpAssets.special = [
        'epic pfp gen/Special face/balloon.png',
        'epic pfp gen/Special face/beat.png',
        'epic pfp gen/Special face/cool-face.png',
        'epic pfp gen/Special face/crystal.png',
        'epic pfp gen/Special face/Cybernetic_Epic_Face.png',
        'epic pfp gen/Special face/dark-sonic.png',
        'epic pfp gen/Special face/death.png',
        'epic pfp gen/Special face/demon.png',
        'epic pfp gen/Special face/DJ.png',
        'epic pfp gen/Special face/dracula.png',
        'epic pfp gen/Special face/Dream_Epic_Face.png',
        'epic pfp gen/Special face/emo-girl.png',
        'epic pfp gen/Special face/Evil_Epic_Face.png',
        'epic pfp gen/Special face/Frozen_Epic_Face.png',
        'epic pfp gen/Special face/Girl.png',
        'epic pfp gen/Special face/goth-neon.png',
        'epic pfp gen/Special face/grey-cat.png',
        'epic pfp gen/Special face/joker.png',
        'epic pfp gen/Special face/kitsune.png',
        'epic pfp gen/Special face/Knight_Epic_Face.png',
        'epic pfp gen/Special face/mdm8.png',
        'epic pfp gen/Special face/morphed-glorp.png',
        'epic pfp gen/Special face/Mlp-rainbow.png',
        'epic pfp gen/Special face/Mlp-shadow.png',
        'epic pfp gen/Special face/Nightmare_Epic_Face.png',
        'epic pfp gen/Special face/Nightmare_Epic_Face-copy.png',
        'epic pfp gen/Special face/Ripped_Apart_Epic_Face.png',
        'epic pfp gen/Special face/ryuk.png',
        'epic pfp gen/Special face/spirit.png',
        'epic pfp gen/Special face/Splink_Epic_Face.png',
        'epic pfp gen/Special face/Starstruck_Epic_Face.png',
        'epic pfp gen/Special face/Unicorn.png',
        'epic pfp gen/Special face/Yeti_Epic_Face.png',
        'epic pfp gen/Special face/zombie-cat.png',
        'epic pfp gen/Special face/Zombie_Epic_Face.png'
    ];
    
    pfpAssets.accessories = [
        'epic pfp gen/Accessories/3D-Glasses.png',
        'epic pfp gen/Accessories/cig.png',
        'epic pfp gen/Accessories/Ghost_Epic_Face.png',
        'epic pfp gen/Accessories/Love-eye-patch.png',
        'epic pfp gen/Accessories/Mustach.png',
        'epic pfp gen/Accessories/Newspaper_Epic_Face.png',
        'epic pfp gen/Accessories/Pit-vipers.png',
        'epic pfp gen/Accessories/sharingan.png',
        'epic pfp gen/Accessories/usa-party-glasses.png'
    ];
    
    pfpAssets.hat = [
        'epic pfp gen/hat/Acheron_Epic_Face.png',
        'epic pfp gen/hat/Aku_Epic_Face.png',
        'epic pfp gen/hat/Angel_Epic_Face.png',
        'epic pfp gen/hat/Angel-2.png',
        'epic pfp gen/hat/angel3.png',
        'epic pfp gen/hat/Arrow_Head_Epic_Face.png',
        'epic pfp gen/hat/black-bandana.png',
        'epic pfp gen/hat/blood-bandana.png',
        'epic pfp gen/hat/crown.png',
        'epic pfp gen/hat/dc-cap.png',
        'epic pfp gen/hat/domo-hat.png',
        'epic pfp gen/hat/domo-obey.png',
        'epic pfp gen/hat/emo-hair-green.png',
        'epic pfp gen/hat/emo-hair-pink.png',
        'epic pfp gen/hat/galaxy-obey.png',
        'epic pfp gen/hat/i-3-Haters.png',
        'epic pfp gen/hat/Jester-outfit.png',
        'epic pfp gen/hat/Melting_Epic_Face.png',
        'epic pfp gen/hat/mtn-dew.png',
        'epic pfp gen/hat/Obey.png',
        'epic pfp gen/hat/partyy.png',
        'epic pfp gen/hat/Skull_Epic_Face.png',
        'epic pfp gen/hat/Tgod.png'
    ];
    
    pfpAssets.stickerTopRight = [
        'epic pfp gen/stick top right/Butter.png',
        'epic pfp gen/stick top right/chaotic.png',
        'epic pfp gen/stick top right/Dragoon.png',
        'epic pfp gen/stick top right/Fairy-Odd-Parents.png',
        'epic pfp gen/stick top right/KIK.png',
        'epic pfp gen/stick top right/monster.png',
        'epic pfp gen/stick top right/Neff.png',
        'epic pfp gen/stick top right/pierced-veil.png',
        'epic pfp gen/stick top right/Please_No_Epic_Faces.png',
        'epic pfp gen/stick top right/Pony-explorer.png',
        'epic pfp gen/stick top right/prestige-1.png',
        'epic pfp gen/stick top right/prestige-2.png',
        'epic pfp gen/stick top right/prestige-3.png',
        'epic pfp gen/stick top right/prestige-4.png',
        'epic pfp gen/stick top right/prestige-5.png',
        'epic pfp gen/stick top right/prestige-6.png',
        'epic pfp gen/stick top right/prestige-7.png',
        'epic pfp gen/stick top right/prestige-8.png',
        'epic pfp gen/stick top right/prestige-9.png',
        'epic pfp gen/stick top right/prestige-10.png',
        'epic pfp gen/stick top right/prestige-11.png',
        'epic pfp gen/stick top right/prestige-12.png',
        'epic pfp gen/stick top right/prestige-13.png',
        'epic pfp gen/stick top right/prestige-14.png',
        'epic pfp gen/stick top right/pretige-master.png',
        'epic pfp gen/stick top right/SFPR-LMFAO.png',
        'epic pfp gen/stick top right/sonic.png',
        'epic pfp gen/stick top right/XD.png',
        'epic pfp gen/stick top right/you-suck.png'
    ];
    
    pfpAssets.stickerRight = [
        'epic pfp gen/sticker right/8bit-cat.png',
        'epic pfp gen/sticker right/anarchy.png',
        'epic pfp gen/sticker right/artix-dog.png',
        'epic pfp gen/sticker right/bioncle.png',
        'epic pfp gen/sticker right/butterfly-knife.png',
        'epic pfp gen/sticker right/cheetah-swag.png',
        'epic pfp gen/sticker right/cool-s.png',
        'epic pfp gen/sticker right/curesed-gameboy.png',
        'epic pfp gen/sticker right/DC-studs.png',
        'epic pfp gen/sticker right/digi-cam.png',
        'epic pfp gen/sticker right/emo-ticon.png',
        'epic pfp gen/sticker right/Epic_Banana.png',
        'epic pfp gen/sticker right/Epic_Computer.png',
        'epic pfp gen/sticker right/gears-of-war.png',
        'epic pfp gen/sticker right/glorp-dog.png',
        'epic pfp gen/sticker right/goth-baddy-1.png',
        'epic pfp gen/sticker right/hatsune-rockstar.png',
        'epic pfp gen/sticker right/htf.png',
        'epic pfp gen/sticker right/ipod.png',
        'epic pfp gen/sticker right/ipods.png',
        'epic pfp gen/sticker right/jet-set-radio.png',
        'epic pfp gen/sticker right/jiggle-dash.png',
        'epic pfp gen/sticker right/Kirby-Headphones.png',
        'epic pfp gen/sticker right/kuromi-001.png',
        'epic pfp gen/sticker right/KUROMI.png',
        'epic pfp gen/sticker right/Lean-Cup-2.png',
        'epic pfp gen/sticker right/lmfao-glitter.png',
        'epic pfp gen/sticker right/Maple-story-mushroom.png',
        'epic pfp gen/sticker right/MELODY.png',
        'epic pfp gen/sticker right/minecraft-pov.png',
        'epic pfp gen/sticker right/mountain-dew.png',
        'epic pfp gen/sticker right/MW2.png',
        'epic pfp gen/sticker right/NY-zebra.png',
        'epic pfp gen/sticker right/quagen-pint.png',
        'epic pfp gen/sticker right/rawr-XD.png',
        'epic pfp gen/sticker right/scary-goth-mommy.png',
        'epic pfp gen/sticker right/skibidi-sonic.png',
        'epic pfp gen/sticker right/skrttles-glitter.png',
        'epic pfp gen/sticker right/speaker-head.png',
        'epic pfp gen/sticker right/star-man.png',
        'epic pfp gen/sticker right/tnt.png',
        'epic pfp gen/sticker right/tomogachi.png',
        'epic pfp gen/sticker right/Water-girl.png'
    ];
    
    pfpAssets.stickerTopLeft = [
        'epic pfp gen/sticker top left/100%-cute.png',
        'epic pfp gen/sticker top left/bakugan.png',
        'epic pfp gen/sticker top left/Epic_Vitamin.png',
        'epic pfp gen/sticker top left/EPIC-FACE.png',
        'epic pfp gen/sticker top left/GORILLAZ.png',
        'epic pfp gen/sticker top left/GTA-SA.png',
        'epic pfp gen/sticker top left/horizon.png',
        'epic pfp gen/sticker top left/hypixel.png',
        'epic pfp gen/sticker top left/i-3-brains.png',
        'epic pfp gen/sticker top left/KORN.png',
        'epic pfp gen/sticker top left/Layer-91.png',
        'epic pfp gen/sticker top left/Mc.png',
        'epic pfp gen/sticker top left/midnight-club.png',
        'epic pfp gen/sticker top left/MLP.png',
        'epic pfp gen/sticker top left/pink-swag.png',
        'epic pfp gen/sticker top left/Saw_Epic_Face.png',
        'epic pfp gen/sticker top left/simple-plan.png',
        'epic pfp gen/sticker top left/SLIPKNOT.png',
        'epic pfp gen/sticker top left/Sonic-404.png',
        'epic pfp gen/sticker top left/swag.png',
        'epic pfp gen/sticker top left/Winamp.png',
        'epic pfp gen/sticker top left/Wizard-101.png',
        'epic pfp gen/sticker top left/yugioh.png',
        'epic pfp gen/sticker top left/zombie-kitty.png',
        'epic pfp gen/sticker top left/zombie-nyan-cat.png'
    ];
    
    pfpAssets.stickerLeft = [
        'epic pfp gen/sticker left/Ancient_Statue_Epic_Face.png',
        'epic pfp gen/sticker left/annoying-orange.png',
        'epic pfp gen/sticker left/Anvil_Epic_Face.png',
        'epic pfp gen/sticker left/awp.png',
        'epic pfp gen/sticker left/Axe_Epic_Face.png',
        'epic pfp gen/sticker left/bit-me-bracelete.png',
        'epic pfp gen/sticker left/black-queen.png',
        'epic pfp gen/sticker left/bulbasor.png',
        'epic pfp gen/sticker left/Cactus_Epic_Face.png',
        'epic pfp gen/sticker left/diamond-sword.png',
        'epic pfp gen/sticker left/EMO-BOB.png',
        'epic pfp gen/sticker left/emo-zombie-cat.png',
        'epic pfp gen/sticker left/Epic_Cereal.png',
        'epic pfp gen/sticker left/fairy.png',
        'epic pfp gen/sticker left/Fire-boy.png',
        'epic pfp gen/sticker left/Flappy-bird.png',
        'epic pfp gen/sticker left/gold-axe.png',
        'epic pfp gen/sticker left/goth-little-pony.png',
        'epic pfp gen/sticker left/green-day.png',
        'epic pfp gen/sticker left/hello-kitty.png',
        'epic pfp gen/sticker left/hot-ponies.png',
        'epic pfp gen/sticker left/Internet_Epic_Face.png',
        'epic pfp gen/sticker left/krooked.png',
        'epic pfp gen/sticker left/Mango-monster.png',
        'epic pfp gen/sticker left/minecraft-scene.png',
        'epic pfp gen/sticker left/Og-monster.png',
        'epic pfp gen/sticker left/pack-a-punch.png',
        'epic pfp gen/sticker left/Pink-Zomboid.png',
        'epic pfp gen/sticker left/Popsicle_Epic_Face.png',
        'epic pfp gen/sticker left/rainbow-boots.png',
        'epic pfp gen/sticker left/rainbow-dike.png',
        'epic pfp gen/sticker left/Rotmg-white-bag.png',
        'epic pfp gen/sticker left/selfie.png',
        'epic pfp gen/sticker left/SKELE-PONY.png',
        'epic pfp gen/sticker left/ultra-rosa.png',
        'epic pfp gen/sticker left/ultra.png',
        'epic pfp gen/sticker left/Veigar.png',
        'epic pfp gen/sticker left/white-puffle.png',
        'epic pfp gen/sticker left/zomboid.png'
    ];
    
    pfpAssets.overlays = [
        'epic pfp gen/overlays/AND-#YOLO.png',
        'epic pfp gen/overlays/AND-BE--A-BELIEBER.png',
        'epic pfp gen/overlays/AND-BE-EPIC.png',
        'epic pfp gen/overlays/HAIIIIII.png',
        'epic pfp gen/overlays/im-so-hardcore.png',
        'epic pfp gen/overlays/Internet-party.png',
        'epic pfp gen/overlays/Layer-79.png',
        'epic pfp gen/overlays/overlay.png',
        'epic pfp gen/overlays/pokemon-vmax.png',
        'epic pfp gen/overlays/scene-stickers.png',
        'epic pfp gen/overlays/TIME-TO-MAKE-CHANGES.png',
        'epic pfp gen/overlays/Trasher-overlay.png',
        'epic pfp gen/overlays/YOU-NEVER-KNOW--WHAT-YOU\'RE-GONNA-GET.png'
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
                // Stickers done, rendering complete
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
