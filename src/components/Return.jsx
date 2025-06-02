import React from "react";
                                import { useNavigate, useLocation } from 'react-router-dom';
                                import '../style/Return.css';

                                const LANG_CODES = ['en', 'es', 'fr', 'de', 'it', 'pt'];

                                function Return() {
                                    const navigate = useNavigate();
                                    const location = useLocation();

                                    const handleReturn = () => {
                                        const pathSegments = location.pathname.split('/').filter(Boolean);
                                        let lang = null;

                                        if (LANG_CODES.includes(pathSegments[pathSegments.length - 1])) {
                                            lang = pathSegments.pop();
                                            if (pathSegments.length > 0) {
                                                pathSegments.pop();
                                            }
                                        } else if (pathSegments.length > 0) {
                                            pathSegments.pop();
                                        }

                                        let newPath = pathSegments.length ? '/' + pathSegments.join('/') : '';
                                        if (lang) {
                                            newPath += newPath ? '/' + lang : '/' + lang;
                                        }

                                        // If newPath is empty, go to /[lang] if lang exists, else /
                                        navigate(newPath || (lang ? '/' + lang : '/'));
                                    };

                                    return (
                                        <div className="ReturnHome">
                                            <button onClick={handleReturn} className="return_button">
                                                ←
                                            </button>
                                        </div>
                                    );
                                }

                                export default Return;